import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ExpenseWhereInput } from "../../../inputs/ExpenseWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyExpenseArgs {
  @TypeGraphQL.Field((_type) => ExpenseWhereInput, {
    nullable: true,
  })
  where?: ExpenseWhereInput | undefined;
}
