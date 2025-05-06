import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ExpenseUpdateInput } from "../../../inputs/ExpenseUpdateInput";
import { ExpenseWhereUniqueInput } from "../../../inputs/ExpenseWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneExpenseArgs {
  @TypeGraphQL.Field((_type) => ExpenseUpdateInput, {
    nullable: false,
  })
  data!: ExpenseUpdateInput;

  @TypeGraphQL.Field((_type) => ExpenseWhereUniqueInput, {
    nullable: false,
  })
  where!: ExpenseWhereUniqueInput;
}
