import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ExpenseWhereUniqueInput } from "../../../inputs/ExpenseWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueExpenseOrThrowArgs {
  @TypeGraphQL.Field((_type) => ExpenseWhereUniqueInput, {
    nullable: false,
  })
  where!: ExpenseWhereUniqueInput;
}
