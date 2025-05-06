import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ActivityLogCreateWithoutUserInput } from "../inputs/ActivityLogCreateWithoutUserInput";
import { ActivityLogUpdateWithoutUserInput } from "../inputs/ActivityLogUpdateWithoutUserInput";
import { ActivityLogWhereUniqueInput } from "../inputs/ActivityLogWhereUniqueInput";

@TypeGraphQL.InputType("ActivityLogUpsertWithWhereUniqueWithoutUserInput", {})
export class ActivityLogUpsertWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field((_type) => ActivityLogWhereUniqueInput, {
    nullable: false,
  })
  where!: ActivityLogWhereUniqueInput;

  @TypeGraphQL.Field((_type) => ActivityLogUpdateWithoutUserInput, {
    nullable: false,
  })
  update!: ActivityLogUpdateWithoutUserInput;

  @TypeGraphQL.Field((_type) => ActivityLogCreateWithoutUserInput, {
    nullable: false,
  })
  create!: ActivityLogCreateWithoutUserInput;
}
