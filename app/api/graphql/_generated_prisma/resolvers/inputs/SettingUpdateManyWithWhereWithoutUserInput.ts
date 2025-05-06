import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SettingScalarWhereInput } from "../inputs/SettingScalarWhereInput";
import { SettingUpdateManyMutationInput } from "../inputs/SettingUpdateManyMutationInput";

@TypeGraphQL.InputType("SettingUpdateManyWithWhereWithoutUserInput", {})
export class SettingUpdateManyWithWhereWithoutUserInput {
  @TypeGraphQL.Field((_type) => SettingScalarWhereInput, {
    nullable: false,
  })
  where!: SettingScalarWhereInput;

  @TypeGraphQL.Field((_type) => SettingUpdateManyMutationInput, {
    nullable: false,
  })
  data!: SettingUpdateManyMutationInput;
}
