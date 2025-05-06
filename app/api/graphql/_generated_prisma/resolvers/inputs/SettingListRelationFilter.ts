import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SettingWhereInput } from "../inputs/SettingWhereInput";

@TypeGraphQL.InputType("SettingListRelationFilter", {})
export class SettingListRelationFilter {
  @TypeGraphQL.Field((_type) => SettingWhereInput, {
    nullable: true,
  })
  every?: SettingWhereInput | undefined;

  @TypeGraphQL.Field((_type) => SettingWhereInput, {
    nullable: true,
  })
  some?: SettingWhereInput | undefined;

  @TypeGraphQL.Field((_type) => SettingWhereInput, {
    nullable: true,
  })
  none?: SettingWhereInput | undefined;
}
