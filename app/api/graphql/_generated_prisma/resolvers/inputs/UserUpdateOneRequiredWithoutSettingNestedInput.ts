import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutSettingInput } from "../inputs/UserCreateOrConnectWithoutSettingInput";
import { UserCreateWithoutSettingInput } from "../inputs/UserCreateWithoutSettingInput";
import { UserUpdateToOneWithWhereWithoutSettingInput } from "../inputs/UserUpdateToOneWithWhereWithoutSettingInput";
import { UserUpsertWithoutSettingInput } from "../inputs/UserUpsertWithoutSettingInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserUpdateOneRequiredWithoutSettingNestedInput", {})
export class UserUpdateOneRequiredWithoutSettingNestedInput {
  @TypeGraphQL.Field((_type) => UserCreateWithoutSettingInput, {
    nullable: true,
  })
  create?: UserCreateWithoutSettingInput | undefined;

  @TypeGraphQL.Field((_type) => UserCreateOrConnectWithoutSettingInput, {
    nullable: true,
  })
  connectOrCreate?: UserCreateOrConnectWithoutSettingInput | undefined;

  @TypeGraphQL.Field((_type) => UserUpsertWithoutSettingInput, {
    nullable: true,
  })
  upsert?: UserUpsertWithoutSettingInput | undefined;

  @TypeGraphQL.Field((_type) => UserWhereUniqueInput, {
    nullable: true,
  })
  connect?: UserWhereUniqueInput | undefined;

  @TypeGraphQL.Field((_type) => UserUpdateToOneWithWhereWithoutSettingInput, {
    nullable: true,
  })
  update?: UserUpdateToOneWithWhereWithoutSettingInput | undefined;
}
