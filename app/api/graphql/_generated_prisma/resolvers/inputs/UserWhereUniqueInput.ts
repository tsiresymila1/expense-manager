import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AccountListRelationFilter } from "../inputs/AccountListRelationFilter";
import { ActivityLogListRelationFilter } from "../inputs/ActivityLogListRelationFilter";
import { BoolFilter } from "../inputs/BoolFilter";
import { CategoryListRelationFilter } from "../inputs/CategoryListRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { ExpenseListRelationFilter } from "../inputs/ExpenseListRelationFilter";
import { SessionListRelationFilter } from "../inputs/SessionListRelationFilter";
import { SettingListRelationFilter } from "../inputs/SettingListRelationFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { UserWhereInput } from "../inputs/UserWhereInput";

@TypeGraphQL.InputType("UserWhereUniqueInput", {})
export class UserWhereUniqueInput {
  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  id?: string | undefined;

  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  email?: string | undefined;

  @TypeGraphQL.Field((_type) => [UserWhereInput], {
    nullable: true,
  })
  AND?: UserWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => [UserWhereInput], {
    nullable: true,
  })
  OR?: UserWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => [UserWhereInput], {
    nullable: true,
  })
  NOT?: UserWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => StringNullableFilter, {
    nullable: true,
  })
  name?: StringNullableFilter | undefined;

  @TypeGraphQL.Field((_type) => BoolFilter, {
    nullable: true,
  })
  emailVerified?: BoolFilter | undefined;

  @TypeGraphQL.Field((_type) => StringNullableFilter, {
    nullable: true,
  })
  image?: StringNullableFilter | undefined;

  @TypeGraphQL.Field((_type) => DateTimeFilter, {
    nullable: true,
  })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field((_type) => DateTimeFilter, {
    nullable: true,
  })
  updatedAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field((_type) => ExpenseListRelationFilter, {
    nullable: true,
  })
  expenses?: ExpenseListRelationFilter | undefined;

  @TypeGraphQL.Field((_type) => CategoryListRelationFilter, {
    nullable: true,
  })
  categories?: CategoryListRelationFilter | undefined;

  @TypeGraphQL.Field((_type) => SessionListRelationFilter, {
    nullable: true,
  })
  sessions?: SessionListRelationFilter | undefined;

  @TypeGraphQL.Field((_type) => AccountListRelationFilter, {
    nullable: true,
  })
  accounts?: AccountListRelationFilter | undefined;

  @TypeGraphQL.Field((_type) => SettingListRelationFilter, {
    nullable: true,
  })
  Setting?: SettingListRelationFilter | undefined;

  @TypeGraphQL.Field((_type) => ActivityLogListRelationFilter, {
    nullable: true,
  })
  activityLogs?: ActivityLogListRelationFilter | undefined;
}
