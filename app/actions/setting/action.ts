"use server";
import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { z } from "zod";
import { createActivity } from "../activity";
import { securedSafeAction } from "../expense-safe-action";

const upsertSchema = z.object({
  data: z.array(
    z.object({
      key: z.string(),
      value: z.string().nullable().optional(),
    })
  ),
});

export const upsertSetting = securedSafeAction
  .schema(upsertSchema)
  .metadata({
    actionName: "set-setting",
  })
  .action<{ success?: string; failure?: string }>(
    async ({ parsedInput: { data }, ctx }) => {
      const promises = data.map((d) => {
        const newKey = `${ctx.user.id}_${d.key}`;
        return prisma.setting.upsert({
          where: {
            key: newKey,
            userId: ctx.user.id,
          },
          create: {
            key: newKey,
            value: d.value,
            userId: ctx.user.id,
          },
          update: {
            value: d.value,
          },
        });
      });
      const activityPrimises = data.map((d) => {
        return createActivity(
          `Setting '${d.key}' updated to ${d.value}.`,
          ctx.user.id
        );
      });
      await Promise.all([...promises, ...activityPrimises]);
      revalidatePath("/dashboard/settings");
      return {};
    }
  );
