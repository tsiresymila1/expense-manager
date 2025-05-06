import { PrismaClient } from "@prisma/client";
import { Arg, Authorized, Mutation, Query, Resolver } from "type-graphql";
import { Category, CategoryCreateInput } from "../../_generated_prisma";
import type { User } from "../../decorator";
import { CurrentUser, PrismaDb } from "../../decorator";

@Authorized("auth")
@Resolver()
export class CategoryResolver {
  @Mutation(() => Category)
  async upsertCategory(
    @Arg("data") data: CategoryCreateInput,
    @PrismaDb() prisma: PrismaClient,
    @CurrentUser() user: User
  ) {
    const category = await prisma.category.upsert({
      where: { id: data.id || "__" },
      update: {
        name: data.name,
        value: data.value,
        description: data.description,
        userId: user?.id,
      },
      create: {
        name: data.name,
        userId: user!.id!,
        value: data.value,
        description: data.description,
        color: data.color,
      },
    });
    return category;
  }

  @Query(() => [Category])
  async getAllCategory(
    @PrismaDb() prisma: PrismaClient,
    @CurrentUser() user: User
  ) {
    return await prisma.category.findMany({
      where: {
        userId: user?.id ?? "___",
      },
    });
  }
  @Mutation(() => Boolean)
  async deleteCategory(
    @Arg("id") id: string,
    @PrismaDb() prisma: PrismaClient,
    @CurrentUser() user: User
  ) {
    const category = await prisma.category.findUnique({
      where: { id },
    });
    if (!category || category.userId !== user?.id) {
      throw new Error(
        "Category not found or you do not have permission to delete it."
      );
    }
    await prisma.category.delete({
      where: { id },
    });
    return true;
  }
}
