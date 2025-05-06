import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutSettingInput } from "../inputs/UserCreateWithoutSettingInput";
import { UserUpdateWithoutSettingInput } from "../inputs/UserUpdateWithoutSettingInput";
import { UserWhereInput } from "../inputs/UserWhereInput";

@TypeGraphQL.InputType("UserUpsertWithoutSettingInput", {})
export class UserUpsertWithoutSettingInput {
  @TypeGraphQL.Field((_type) => UserUpdateWithoutSettingInput, {
    nullable: false,
  })
  update!: UserUpdateWithoutSettingInput;

  @TypeGraphQL.Field((_type) => UserCreateWithoutSettingInput, {
    nullable: false,
  })
  create!: UserCreateWithoutSettingInput;

  @TypeGraphQL.Field((_type) => UserWhereInput, {
    nullable: true,
  })
  where?: UserWhereInput | undefined;
}
