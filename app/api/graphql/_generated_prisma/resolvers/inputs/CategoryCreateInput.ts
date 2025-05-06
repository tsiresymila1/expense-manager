import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExpenseCreateNestedManyWithoutCategoryInput } from "../inputs/ExpenseCreateNestedManyWithoutCategoryInput";
import { UserCreateNestedOneWithoutCategoriesInput } from "../inputs/UserCreateNestedOneWithoutCategoriesInput";

@TypeGraphQL.InputType("CategoryCreateInput", {})
export class CategoryCreateInput {
  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  id?: string | undefined;

  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  name!: string;

  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  color?: string | undefined;

  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  value?: string | undefined;

  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  description?: string | undefined;

  @TypeGraphQL.Field((_type) => Date, {
    nullable: true,
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field((_type) => Date, {
    nullable: true,
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field((_type) => UserCreateNestedOneWithoutCategoriesInput, {
    nullable: false,
  })
  user!: UserCreateNestedOneWithoutCategoriesInput;

  @TypeGraphQL.Field((_type) => ExpenseCreateNestedManyWithoutCategoryInput, {
    nullable: true,
  })
  expenses?: ExpenseCreateNestedManyWithoutCategoryInput | undefined;
}
