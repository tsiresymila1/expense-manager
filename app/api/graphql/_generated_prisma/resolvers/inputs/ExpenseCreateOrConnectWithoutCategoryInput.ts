import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExpenseCreateWithoutCategoryInput } from "../inputs/ExpenseCreateWithoutCategoryInput";
import { ExpenseWhereUniqueInput } from "../inputs/ExpenseWhereUniqueInput";

@TypeGraphQL.InputType("ExpenseCreateOrConnectWithoutCategoryInput", {})
export class ExpenseCreateOrConnectWithoutCategoryInput {
  @TypeGraphQL.Field((_type) => ExpenseWhereUniqueInput, {
    nullable: false,
  })
  where!: ExpenseWhereUniqueInput;

  @TypeGraphQL.Field((_type) => ExpenseCreateWithoutCategoryInput, {
    nullable: false,
  })
  create!: ExpenseCreateWithoutCategoryInput;
}
