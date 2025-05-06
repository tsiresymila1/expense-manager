import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SettingCreateManyUserInputEnvelope } from "../inputs/SettingCreateManyUserInputEnvelope";
import { SettingCreateOrConnectWithoutUserInput } from "../inputs/SettingCreateOrConnectWithoutUserInput";
import { SettingCreateWithoutUserInput } from "../inputs/SettingCreateWithoutUserInput";
import { SettingScalarWhereInput } from "../inputs/SettingScalarWhereInput";
import { SettingUpdateManyWithWhereWithoutUserInput } from "../inputs/SettingUpdateManyWithWhereWithoutUserInput";
import { SettingUpdateWithWhereUniqueWithoutUserInput } from "../inputs/SettingUpdateWithWhereUniqueWithoutUserInput";
import { SettingUpsertWithWhereUniqueWithoutUserInput } from "../inputs/SettingUpsertWithWhereUniqueWithoutUserInput";
import { SettingWhereUniqueInput } from "../inputs/SettingWhereUniqueInput";

@TypeGraphQL.InputType("SettingUpdateManyWithoutUserNestedInput", {})
export class SettingUpdateManyWithoutUserNestedInput {
  @TypeGraphQL.Field((_type) => [SettingCreateWithoutUserInput], {
    nullable: true,
  })
  create?: SettingCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field((_type) => [SettingCreateOrConnectWithoutUserInput], {
    nullable: true,
  })
  connectOrCreate?: SettingCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(
    (_type) => [SettingUpsertWithWhereUniqueWithoutUserInput],
    {
      nullable: true,
    },
  )
  upsert?: SettingUpsertWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field((_type) => SettingCreateManyUserInputEnvelope, {
    nullable: true,
  })
  createMany?: SettingCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field((_type) => [SettingWhereUniqueInput], {
    nullable: true,
  })
  set?: SettingWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field((_type) => [SettingWhereUniqueInput], {
    nullable: true,
  })
  disconnect?: SettingWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field((_type) => [SettingWhereUniqueInput], {
    nullable: true,
  })
  delete?: SettingWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field((_type) => [SettingWhereUniqueInput], {
    nullable: true,
  })
  connect?: SettingWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(
    (_type) => [SettingUpdateWithWhereUniqueWithoutUserInput],
    {
      nullable: true,
    },
  )
  update?: SettingUpdateWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field((_type) => [SettingUpdateManyWithWhereWithoutUserInput], {
    nullable: true,
  })
  updateMany?: SettingUpdateManyWithWhereWithoutUserInput[] | undefined;

  @TypeGraphQL.Field((_type) => [SettingScalarWhereInput], {
    nullable: true,
  })
  deleteMany?: SettingScalarWhereInput[] | undefined;
}
