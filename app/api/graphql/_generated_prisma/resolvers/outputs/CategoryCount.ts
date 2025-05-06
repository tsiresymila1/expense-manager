import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CategoryCountExpensesArgs } from "./args/CategoryCountExpensesArgs";

@TypeGraphQL.ObjectType("CategoryCount", {})
export class CategoryCount {
  expenses!: number;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    name: "expenses",
    nullable: false,
  })
  getExpenses(
    @TypeGraphQL.Root() root: CategoryCount,
    @TypeGraphQL.Args() args: CategoryCountExpensesArgs,
  ): number {
    return root.expenses;
  }
}
