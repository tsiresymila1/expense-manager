import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CategoryCreateWithoutExpensesInput } from "../inputs/CategoryCreateWithoutExpensesInput";
import { CategoryWhereUniqueInput } from "../inputs/CategoryWhereUniqueInput";

@TypeGraphQL.InputType("CategoryCreateOrConnectWithoutExpensesInput", {})
export class CategoryCreateOrConnectWithoutExpensesInput {
  @TypeGraphQL.Field((_type) => CategoryWhereUniqueInput, {
    nullable: false,
  })
  where!: CategoryWhereUniqueInput;

  @TypeGraphQL.Field((_type) => CategoryCreateWithoutExpensesInput, {
    nullable: false,
  })
  create!: CategoryCreateWithoutExpensesInput;
}
