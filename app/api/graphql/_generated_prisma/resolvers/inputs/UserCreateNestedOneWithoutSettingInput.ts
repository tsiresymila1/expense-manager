import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutSettingInput } from "../inputs/UserCreateOrConnectWithoutSettingInput";
import { UserCreateWithoutSettingInput } from "../inputs/UserCreateWithoutSettingInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateNestedOneWithoutSettingInput", {})
export class UserCreateNestedOneWithoutSettingInput {
  @TypeGraphQL.Field((_type) => UserCreateWithoutSettingInput, {
    nullable: true,
  })
  create?: UserCreateWithoutSettingInput | undefined;

  @TypeGraphQL.Field((_type) => UserCreateOrConnectWithoutSettingInput, {
    nullable: true,
  })
  connectOrCreate?: UserCreateOrConnectWithoutSettingInput | undefined;

  @TypeGraphQL.Field((_type) => UserWhereUniqueInput, {
    nullable: true,
  })
  connect?: UserWhereUniqueInput | undefined;
}
