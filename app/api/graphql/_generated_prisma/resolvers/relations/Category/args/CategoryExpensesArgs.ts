import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ExpenseOrderByWithRelationInput } from "../../../inputs/ExpenseOrderByWithRelationInput";
import { ExpenseWhereInput } from "../../../inputs/ExpenseWhereInput";
import { ExpenseWhereUniqueInput } from "../../../inputs/ExpenseWhereUniqueInput";
import { ExpenseScalarFieldEnum } from "../../../../enums/ExpenseScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class CategoryExpensesArgs {
  @TypeGraphQL.Field((_type) => ExpenseWhereInput, {
    nullable: true,
  })
  where?: ExpenseWhereInput | undefined;

  @TypeGraphQL.Field((_type) => [ExpenseOrderByWithRelationInput], {
    nullable: true,
  })
  orderBy?: ExpenseOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field((_type) => ExpenseWhereUniqueInput, {
    nullable: true,
  })
  cursor?: ExpenseWhereUniqueInput | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  take?: number | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  skip?: number | undefined;

  @TypeGraphQL.Field((_type) => [ExpenseScalarFieldEnum], {
    nullable: true,
  })
  distinct?:
    | Array<
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
      >
    | undefined;
}
