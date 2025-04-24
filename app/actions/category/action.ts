"use server";
import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { z } from "zod";
import { securedSafeAction } from "../expense-safe-action";

const createSchema = z.object({
  id: z.string().optional(),
  name: z.string().min(3).max(10),
  value: z.string().min(3).max(100),
  description: z.string().optional(),
});

export const upsertCategory = securedSafeAction
  .schema(createSchema)
  .metadata({
    actionName: "create-category",
  })
  .action<{ success?: string; error?: string }>(
    async ({ parsedInput: { name, value, id, description }, ctx }) => {
      await prisma.category.upsert({
        where: { id: id ?? "" },
        create: {
          name,
          value,
          description,
          userId: ctx.user.id,
        },
        update: {
          name,
          value,
          description,
        },
      });
      revalidatePath("/dashboard/category");
      return { success: "Category created" };
    }
  );

const deleteSchema = z.object({
  id: z.string(),
});

export const deleteCategory = securedSafeAction
  .schema(deleteSchema)
  .metadata({
    actionName: "delete-category",
  })
  .action<{ success?: string; error?: string }>(
    async ({ parsedInput: { id }, ctx }) => {
      await prisma.category.delete({
        where: {
          id,
          userId: ctx.user.id,
        },
      });
      revalidatePath("/dashboard/category");
      return { success: "Category deleted" };
    }
  );
