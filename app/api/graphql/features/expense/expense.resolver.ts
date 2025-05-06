import { PrismaClient } from "@prisma/client";
import { Arg, Authorized, Mutation, Query, Resolver } from "type-graphql";
import { Expense, ExpenseCreateInput } from "../../_generated_prisma";
import { CurrentUser, PrismaDb, type User } from "../../decorator";

@Authorized("auth")
@Resolver()
export class ExpenseResolver {
  @Mutation(() => Expense)
  async upsertExpense(
    @Arg("data") info: ExpenseCreateInput,
    @PrismaDb() prisma: PrismaClient,
    @CurrentUser() user: User
  ): Promise<Expense> {
    const expense = await prisma.expense.upsert({
      where: { id: info.id || "__" },
      update: {
        amount: info.amount,
        date: info.date,
        user: {
          connect: {
            id: user!.id!,
          },
        },
        notes: info.notes,
        payment: info.payment,
        category: {
          connect: {
            id: info.category.connect?.id,
          },
        },
        description: info.description,
      },
      create: {
        amount: info.amount,
        date: info.date,
        user: {
          connect: {
            id: user!.id!,
          },
        },
        notes: info.notes,
        payment: info.payment,
        category: {
          connect: {
            id: info.category.connect?.id,
          },
        },
        description: info.description,
      },
    });
    return expense;
  }

  @Query(() => [Expense])
  async getAllExpense(
    @PrismaDb() prisma: PrismaClient,
    @CurrentUser() user: User
  ) {
    return await prisma.expense.findMany({
      where: {
        userId: user?.id ?? "___",
      },
    });
  }
  @Mutation(() => Boolean)
  async deleteExpense(
    @Arg("id") id: string,
    @PrismaDb() prisma: PrismaClient,
    @CurrentUser() user: User
  ) {
    const expense = await prisma.expense.findUnique({
      where: { id },
    });
    if (!expense || expense.userId !== user?.id) {
      throw new Error(
        "Category not found or you do not have permission to delete it."
      );
    }
    await prisma.expense.delete({
      where: { id },
    });
    return true;
  }
}
