import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("SettingScalarWhereInput", {})
export class SettingScalarWhereInput {
  @TypeGraphQL.Field((_type) => [SettingScalarWhereInput], {
    nullable: true,
  })
  AND?: SettingScalarWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => [SettingScalarWhereInput], {
    nullable: true,
  })
  OR?: SettingScalarWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => [SettingScalarWhereInput], {
    nullable: true,
  })
  NOT?: SettingScalarWhereInput[] | undefined;

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
}
