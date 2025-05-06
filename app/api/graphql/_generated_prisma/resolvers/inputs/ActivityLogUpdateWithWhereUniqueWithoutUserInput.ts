import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ActivityLogUpdateWithoutUserInput } from "../inputs/ActivityLogUpdateWithoutUserInput";
import { ActivityLogWhereUniqueInput } from "../inputs/ActivityLogWhereUniqueInput";

@TypeGraphQL.InputType("ActivityLogUpdateWithWhereUniqueWithoutUserInput", {})
export class ActivityLogUpdateWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field((_type) => ActivityLogWhereUniqueInput, {
    nullable: false,
  })
  where!: ActivityLogWhereUniqueInput;

  @TypeGraphQL.Field((_type) => ActivityLogUpdateWithoutUserInput, {
    nullable: false,
  })
  data!: ActivityLogUpdateWithoutUserInput;
}
