import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExpenseWhereInput } from "../inputs/ExpenseWhereInput";

@TypeGraphQL.InputType("ExpenseListRelationFilter", {})
export class ExpenseListRelationFilter {
  @TypeGraphQL.Field((_type) => ExpenseWhereInput, {
    nullable: true,
  })
  every?: ExpenseWhereInput | undefined;

  @TypeGraphQL.Field((_type) => ExpenseWhereInput, {
    nullable: true,
  })
  some?: ExpenseWhereInput | undefined;

  @TypeGraphQL.Field((_type) => ExpenseWhereInput, {
    nullable: true,
  })
  none?: ExpenseWhereInput | undefined;
}
