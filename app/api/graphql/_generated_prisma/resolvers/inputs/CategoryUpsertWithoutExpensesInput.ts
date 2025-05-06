import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CategoryCreateWithoutExpensesInput } from "../inputs/CategoryCreateWithoutExpensesInput";
import { CategoryUpdateWithoutExpensesInput } from "../inputs/CategoryUpdateWithoutExpensesInput";
import { CategoryWhereInput } from "../inputs/CategoryWhereInput";

@TypeGraphQL.InputType("CategoryUpsertWithoutExpensesInput", {})
export class CategoryUpsertWithoutExpensesInput {
  @TypeGraphQL.Field((_type) => CategoryUpdateWithoutExpensesInput, {
    nullable: false,
  })
  update!: CategoryUpdateWithoutExpensesInput;

  @TypeGraphQL.Field((_type) => CategoryCreateWithoutExpensesInput, {
    nullable: false,
  })
  create!: CategoryCreateWithoutExpensesInput;

  @TypeGraphQL.Field((_type) => CategoryWhereInput, {
    nullable: true,
  })
  where?: CategoryWhereInput | undefined;
}
