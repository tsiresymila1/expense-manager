"use server";
import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { z } from "zod";
import { securedSafeAction } from "../expense-safe-action";

const schema = z.object({
  name: z.string().min(3).max(10),
  value: z.string().min(8).max(100),
  description: z.string().optional(),
});

export const createCategory = securedSafeAction
  .schema(schema)
  .metadata({
    actionName: "create-category",
  })
  .action<{ success?: string; error?: string }>(
    async ({ parsedInput: { name }, ctx }) => {
      revalidatePath("/dashboard/category");
      await prisma.category.create({
        data: {
          name,
          userId: ctx.user.id,
        },
      });
      return { success: "Category created" };
    }
  );
