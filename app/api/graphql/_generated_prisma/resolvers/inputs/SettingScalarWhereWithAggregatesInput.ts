import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("SettingScalarWhereWithAggregatesInput", {})
export class SettingScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field((_type) => [SettingScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  AND?: SettingScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field((_type) => [SettingScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  OR?: SettingScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field((_type) => [SettingScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  NOT?: SettingScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field((_type) => StringWithAggregatesFilter, {
    nullable: true,
  })
  id?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field((_type) => StringWithAggregatesFilter, {
    nullable: true,
  })
  key?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field((_type) => StringNullableWithAggregatesFilter, {
    nullable: true,
  })
  value?: StringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field((_type) => StringWithAggregatesFilter, {
    nullable: true,
  })
  userId?: StringWithAggregatesFilter | undefined;
}
