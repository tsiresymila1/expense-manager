import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExpenseUpdateWithoutUserInput } from "../inputs/ExpenseUpdateWithoutUserInput";
import { ExpenseWhereUniqueInput } from "../inputs/ExpenseWhereUniqueInput";

@TypeGraphQL.InputType("ExpenseUpdateWithWhereUniqueWithoutUserInput", {})
export class ExpenseUpdateWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field((_type) => ExpenseWhereUniqueInput, {
    nullable: false,
  })
  where!: ExpenseWhereUniqueInput;

  @TypeGraphQL.Field((_type) => ExpenseUpdateWithoutUserInput, {
    nullable: false,
  })
  data!: ExpenseUpdateWithoutUserInput;
}
