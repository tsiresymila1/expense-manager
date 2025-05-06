import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExpenseCreateWithoutCategoryInput } from "../inputs/ExpenseCreateWithoutCategoryInput";
import { ExpenseUpdateWithoutCategoryInput } from "../inputs/ExpenseUpdateWithoutCategoryInput";
import { ExpenseWhereUniqueInput } from "../inputs/ExpenseWhereUniqueInput";

@TypeGraphQL.InputType("ExpenseUpsertWithWhereUniqueWithoutCategoryInput", {})
export class ExpenseUpsertWithWhereUniqueWithoutCategoryInput {
  @TypeGraphQL.Field((_type) => ExpenseWhereUniqueInput, {
    nullable: false,
  })
  where!: ExpenseWhereUniqueInput;

  @TypeGraphQL.Field((_type) => ExpenseUpdateWithoutCategoryInput, {
    nullable: false,
  })
  update!: ExpenseUpdateWithoutCategoryInput;

  @TypeGraphQL.Field((_type) => ExpenseCreateWithoutCategoryInput, {
    nullable: false,
  })
  create!: ExpenseCreateWithoutCategoryInput;
}
