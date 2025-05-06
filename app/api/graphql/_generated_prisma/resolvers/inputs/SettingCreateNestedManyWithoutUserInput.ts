import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SettingCreateManyUserInputEnvelope } from "../inputs/SettingCreateManyUserInputEnvelope";
import { SettingCreateOrConnectWithoutUserInput } from "../inputs/SettingCreateOrConnectWithoutUserInput";
import { SettingCreateWithoutUserInput } from "../inputs/SettingCreateWithoutUserInput";
import { SettingWhereUniqueInput } from "../inputs/SettingWhereUniqueInput";

@TypeGraphQL.InputType("SettingCreateNestedManyWithoutUserInput", {})
export class SettingCreateNestedManyWithoutUserInput {
  @TypeGraphQL.Field((_type) => [SettingCreateWithoutUserInput], {
    nullable: true,
  })
  create?: SettingCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field((_type) => [SettingCreateOrConnectWithoutUserInput], {
    nullable: true,
  })
  connectOrCreate?: SettingCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field((_type) => SettingCreateManyUserInputEnvelope, {
    nullable: true,
  })
  createMany?: SettingCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field((_type) => [SettingWhereUniqueInput], {
    nullable: true,
  })
  connect?: SettingWhereUniqueInput[] | undefined;
}
