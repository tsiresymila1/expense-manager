import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SettingCreateWithoutUserInput } from "../inputs/SettingCreateWithoutUserInput";
import { SettingWhereUniqueInput } from "../inputs/SettingWhereUniqueInput";

@TypeGraphQL.InputType("SettingCreateOrConnectWithoutUserInput", {})
export class SettingCreateOrConnectWithoutUserInput {
  @TypeGraphQL.Field((_type) => SettingWhereUniqueInput, {
    nullable: false,
  })
  where!: SettingWhereUniqueInput;

  @TypeGraphQL.Field((_type) => SettingCreateWithoutUserInput, {
    nullable: false,
  })
  create!: SettingCreateWithoutUserInput;
}
