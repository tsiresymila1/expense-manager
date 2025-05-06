import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SettingCreateManyUserInput } from "../inputs/SettingCreateManyUserInput";

@TypeGraphQL.InputType("SettingCreateManyUserInputEnvelope", {})
export class SettingCreateManyUserInputEnvelope {
  @TypeGraphQL.Field((_type) => [SettingCreateManyUserInput], {
    nullable: false,
  })
  data!: SettingCreateManyUserInput[];

  @TypeGraphQL.Field((_type) => Boolean, {
    nullable: true,
  })
  skipDuplicates?: boolean | undefined;
}
