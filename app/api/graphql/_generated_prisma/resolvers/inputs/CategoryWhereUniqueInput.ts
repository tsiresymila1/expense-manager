import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CategoryNameUserIdValueCompoundUniqueInput } from "../inputs/CategoryNameUserIdValueCompoundUniqueInput";
import { CategoryWhereInput } from "../inputs/CategoryWhereInput";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { ExpenseListRelationFilter } from "../inputs/ExpenseListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";

@TypeGraphQL.InputType("CategoryWhereUniqueInput", {})
export class CategoryWhereUniqueInput {
  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  id?: string | undefined;

  @TypeGraphQL.Field((_type) => CategoryNameUserIdValueCompoundUniqueInput, {
    nullable: true,
  })
  name_userId_value?: CategoryNameUserIdValueCompoundUniqueInput | undefined;

  @TypeGraphQL.Field((_type) => [CategoryWhereInput], {
    nullable: true,
  })
  AND?: CategoryWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => [CategoryWhereInput], {
    nullable: true,
  })
  OR?: CategoryWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => [CategoryWhereInput], {
    nullable: true,
  })
  NOT?: CategoryWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => StringFilter, {
    nullable: true,
  })
  name?: StringFilter | undefined;

  @TypeGraphQL.Field((_type) => StringNullableFilter, {
    nullable: true,
  })
  color?: StringNullableFilter | undefined;

  @TypeGraphQL.Field((_type) => StringNullableFilter, {
    nullable: true,
  })
  value?: StringNullableFilter | undefined;

  @TypeGraphQL.Field((_type) => StringNullableFilter, {
    nullable: true,
  })
  description?: StringNullableFilter | undefined;

  @TypeGraphQL.Field((_type) => DateTimeFilter, {
    nullable: true,
  })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field((_type) => DateTimeFilter, {
    nullable: true,
  })
  updatedAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field((_type) => StringFilter, {
    nullable: true,
  })
  userId?: StringFilter | undefined;

  @TypeGraphQL.Field((_type) => UserRelationFilter, {
    nullable: true,
  })
  user?: UserRelationFilter | undefined;

  @TypeGraphQL.Field((_type) => ExpenseListRelationFilter, {
    nullable: true,
  })
  expenses?: ExpenseListRelationFilter | undefined;
}
