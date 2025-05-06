import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateNestedOneWithoutCategoriesInput } from "../inputs/UserCreateNestedOneWithoutCategoriesInput";

@TypeGraphQL.InputType("CategoryCreateWithoutExpensesInput", {})
export class CategoryCreateWithoutExpensesInput {
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
}
