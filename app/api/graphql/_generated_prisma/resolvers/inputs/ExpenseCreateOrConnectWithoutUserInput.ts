import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExpenseCreateWithoutUserInput } from "../inputs/ExpenseCreateWithoutUserInput";
import { ExpenseWhereUniqueInput } from "../inputs/ExpenseWhereUniqueInput";

@TypeGraphQL.InputType("ExpenseCreateOrConnectWithoutUserInput", {})
export class ExpenseCreateOrConnectWithoutUserInput {
  @TypeGraphQL.Field((_type) => ExpenseWhereUniqueInput, {
    nullable: false,
  })
  where!: ExpenseWhereUniqueInput;

  @TypeGraphQL.Field((_type) => ExpenseCreateWithoutUserInput, {
    nullable: false,
  })
  create!: ExpenseCreateWithoutUserInput;
}
