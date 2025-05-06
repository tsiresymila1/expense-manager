import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ExpenseCreateInput } from "../../../inputs/ExpenseCreateInput";
import { ExpenseUpdateInput } from "../../../inputs/ExpenseUpdateInput";
import { ExpenseWhereUniqueInput } from "../../../inputs/ExpenseWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneExpenseArgs {
  @TypeGraphQL.Field((_type) => ExpenseWhereUniqueInput, {
    nullable: false,
  })
  where!: ExpenseWhereUniqueInput;

  @TypeGraphQL.Field((_type) => ExpenseCreateInput, {
    nullable: false,
  })
  create!: ExpenseCreateInput;

  @TypeGraphQL.Field((_type) => ExpenseUpdateInput, {
    nullable: false,
  })
  update!: ExpenseUpdateInput;
}
