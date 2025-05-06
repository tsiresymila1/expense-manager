import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";

@TypeGraphQL.InputType("SettingWhereInput", {})
export class SettingWhereInput {
  @TypeGraphQL.Field((_type) => [SettingWhereInput], {
    nullable: true,
  })
  AND?: SettingWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => [SettingWhereInput], {
    nullable: true,
  })
  OR?: SettingWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => [SettingWhereInput], {
    nullable: true,
  })
  NOT?: SettingWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => StringFilter, {
    nullable: true,
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field((_type) => StringFilter, {
    nullable: true,
  })
  key?: StringFilter | undefined;

  @TypeGraphQL.Field((_type) => StringNullableFilter, {
    nullable: true,
  })
  value?: StringNullableFilter | undefined;

  @TypeGraphQL.Field((_type) => StringFilter, {
    nullable: true,
  })
  userId?: StringFilter | undefined;

  @TypeGraphQL.Field((_type) => UserRelationFilter, {
    nullable: true,
  })
  user?: UserRelationFilter | undefined;
}
