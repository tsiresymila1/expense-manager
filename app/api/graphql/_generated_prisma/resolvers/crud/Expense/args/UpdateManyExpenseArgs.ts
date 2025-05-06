import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ExpenseUpdateManyMutationInput } from "../../../inputs/ExpenseUpdateManyMutationInput";
import { ExpenseWhereInput } from "../../../inputs/ExpenseWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyExpenseArgs {
  @TypeGraphQL.Field((_type) => ExpenseUpdateManyMutationInput, {
    nullable: false,
  })
  data!: ExpenseUpdateManyMutationInput;

  @TypeGraphQL.Field((_type) => ExpenseWhereInput, {
    nullable: true,
  })
  where?: ExpenseWhereInput | undefined;
}
