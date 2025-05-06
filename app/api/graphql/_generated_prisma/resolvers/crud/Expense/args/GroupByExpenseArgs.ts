import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ExpenseOrderByWithAggregationInput } from "../../../inputs/ExpenseOrderByWithAggregationInput";
import { ExpenseScalarWhereWithAggregatesInput } from "../../../inputs/ExpenseScalarWhereWithAggregatesInput";
import { ExpenseWhereInput } from "../../../inputs/ExpenseWhereInput";
import { ExpenseScalarFieldEnum } from "../../../../enums/ExpenseScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByExpenseArgs {
  @TypeGraphQL.Field((_type) => ExpenseWhereInput, {
    nullable: true,
  })
  where?: ExpenseWhereInput | undefined;

  @TypeGraphQL.Field((_type) => [ExpenseOrderByWithAggregationInput], {
    nullable: true,
  })
  orderBy?: ExpenseOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field((_type) => [ExpenseScalarFieldEnum], {
    nullable: false,
  })
  by!: Array<
    | "id"
    | "amount"
    | "description"
    | "notes"
    | "payment"
    | "date"
    | "createdAt"
    | "updatedAt"
    | "userId"
    | "categoryId"
  >;

  @TypeGraphQL.Field((_type) => ExpenseScalarWhereWithAggregatesInput, {
    nullable: true,
  })
  having?: ExpenseScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  take?: number | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  skip?: number | undefined;
}
