import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ExpenseCreateInput } from "../../../inputs/ExpenseCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneExpenseArgs {
  @TypeGraphQL.Field((_type) => ExpenseCreateInput, {
    nullable: false,
  })
  data!: ExpenseCreateInput;
}
