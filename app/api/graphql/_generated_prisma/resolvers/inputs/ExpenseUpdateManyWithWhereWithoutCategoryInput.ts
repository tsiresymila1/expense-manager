import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExpenseScalarWhereInput } from "../inputs/ExpenseScalarWhereInput";
import { ExpenseUpdateManyMutationInput } from "../inputs/ExpenseUpdateManyMutationInput";

@TypeGraphQL.InputType("ExpenseUpdateManyWithWhereWithoutCategoryInput", {})
export class ExpenseUpdateManyWithWhereWithoutCategoryInput {
  @TypeGraphQL.Field((_type) => ExpenseScalarWhereInput, {
    nullable: false,
  })
  where!: ExpenseScalarWhereInput;

  @TypeGraphQL.Field((_type) => ExpenseUpdateManyMutationInput, {
    nullable: false,
  })
  data!: ExpenseUpdateManyMutationInput;
}
