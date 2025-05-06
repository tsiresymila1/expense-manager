import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExpenseUpdateWithoutCategoryInput } from "../inputs/ExpenseUpdateWithoutCategoryInput";
import { ExpenseWhereUniqueInput } from "../inputs/ExpenseWhereUniqueInput";

@TypeGraphQL.InputType("ExpenseUpdateWithWhereUniqueWithoutCategoryInput", {})
export class ExpenseUpdateWithWhereUniqueWithoutCategoryInput {
  @TypeGraphQL.Field((_type) => ExpenseWhereUniqueInput, {
    nullable: false,
  })
  where!: ExpenseWhereUniqueInput;

  @TypeGraphQL.Field((_type) => ExpenseUpdateWithoutCategoryInput, {
    nullable: false,
  })
  data!: ExpenseUpdateWithoutCategoryInput;
}
