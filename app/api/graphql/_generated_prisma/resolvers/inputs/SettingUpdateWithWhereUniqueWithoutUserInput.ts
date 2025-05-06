import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SettingUpdateWithoutUserInput } from "../inputs/SettingUpdateWithoutUserInput";
import { SettingWhereUniqueInput } from "../inputs/SettingWhereUniqueInput";

@TypeGraphQL.InputType("SettingUpdateWithWhereUniqueWithoutUserInput", {})
export class SettingUpdateWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field((_type) => SettingWhereUniqueInput, {
    nullable: false,
  })
  where!: SettingWhereUniqueInput;

  @TypeGraphQL.Field((_type) => SettingUpdateWithoutUserInput, {
    nullable: false,
  })
  data!: SettingUpdateWithoutUserInput;
}
