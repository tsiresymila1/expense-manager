"use server";
import prisma from "@/lib/prisma";
import { formatDate } from "date-fns";
import { revalidatePath } from "next/cache";
import { z } from "zod";
import { createActivity } from "../activity";
import { securedSafeAction } from "../expense-safe-action";

const upsertSchema = z.object({
  id: z.string().optional(),
  amount: z.number().min(0),
  category: z.string(),
  date: z.date(),
  payment: z.string().optional(),
  description: z.string(),
  notes: z.string().optional(),
});

export const upsertExpense = securedSafeAction
  .schema(upsertSchema)
  .metadata({
    actionName: "create-expense",
  })
  .action<{ success?: string; error?: string }>(
    async ({
      parsedInput: { id, amount, category, notes, date, payment, description },
      ctx,
    }) => {
      await prisma.expense.upsert({
        where: { id: id || "___" },
        create: {
          amount,
          description,
          user: {
            connect: {
              id: ctx.user.id,
            },
          },
          payment,
          notes: notes,
          category: {
            connect: {
              id: category,
            },
          },
          date,
        },
        update: {
          amount,
          description,
          user: {
            connect: {
              id: ctx.user.id,
            },
          },
          payment,
          notes: notes,
          date,
          category: {
            connect: {
              id: category,
            },
          },
        },
      });
      await createActivity(
        `Expense '${description}' ${id ? "updated" : "created"}.`,
        ctx.user.id
      );
      revalidatePath("/dashboard/expense");
      return { success: "Expense created" };
    }
  );

const deleteSchema = z.object({
  id: z.string(),
});

export const deleteExpense = securedSafeAction
  .schema(deleteSchema)
  .metadata({
    actionName: "delete-expense",
  })
  .action<{ success?: string; error?: string }>(
    async ({ parsedInput: { id }, ctx }) => {
      const exp = await prisma.expense.delete({
        where: {
          id,
          userId: ctx.user.id,
        },
      });
      await createActivity(
        `Expense '${exp.description}' deleted.`,
        ctx.user.id
      );
      revalidatePath("/dashboard/expense");
      return { success: "Expense deleted" };
    }
  );

export const exportExpense = securedSafeAction
  .metadata({
    actionName: "export-expense",
  })
  .action(async ({ ctx }) => {
    const expense = await prisma.expense.findMany({
      where: { userId: ctx.user.id },
      include: {
        category: true,
      },
    });
    return expense.map((ex) => ({
      Date: formatDate(ex.date, "dd/MM/y"),
      Category: ex.category.name,
      Amount: ex.amount,
      Details: ex.description,
    }));
  });
