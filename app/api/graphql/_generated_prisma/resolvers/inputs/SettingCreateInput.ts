import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateNestedOneWithoutSettingInput } from "../inputs/UserCreateNestedOneWithoutSettingInput";

@TypeGraphQL.InputType("SettingCreateInput", {})
export class SettingCreateInput {
  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  id?: string | undefined;

  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  key!: string;

  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  value?: string | undefined;

  @TypeGraphQL.Field((_type) => UserCreateNestedOneWithoutSettingInput, {
    nullable: false,
  })
  user!: UserCreateNestedOneWithoutSettingInput;
}
