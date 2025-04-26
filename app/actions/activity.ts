"use server";
import prisma from "@/lib/prisma";
import { z } from "zod";
import { securedSafeAction } from "./expense-safe-action";
import { getUserAgent } from "./get-header";

const schema = z.object({
  action: z.string(),
  description: z.string().optional(),
  ipAddress: z.string().optional(),
});
export const addActivity = securedSafeAction
  .schema(schema)
  .metadata({
    actionName: "add-log",
  })
  .action(async ({ parsedInput: { action, description, ipAddress }, ctx }) => {
    return await createActivity(action, ctx.user.id, description, ipAddress);
  });

export async function createActivity(
  action: string,
  userId: string,
  ipAddress: string | undefined = undefined,
  description: string = ""
) {
  const { device, browser, os } = await getUserAgent();
  await prisma.activityLog.create({
    data: {
      action,
      userId,
      userAgent: `${browser.name} ${browser.version} ${device.vendor} ${os.name} ${os.version}`,
      description,
      ipAddress,
    },
  });
}
