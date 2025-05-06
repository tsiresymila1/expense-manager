import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ActivityLogCreateManyUserInput } from "../inputs/ActivityLogCreateManyUserInput";

@TypeGraphQL.InputType("ActivityLogCreateManyUserInputEnvelope", {})
export class ActivityLogCreateManyUserInputEnvelope {
  @TypeGraphQL.Field((_type) => [ActivityLogCreateManyUserInput], {
    nullable: false,
  })
  data!: ActivityLogCreateManyUserInput[];

  @TypeGraphQL.Field((_type) => Boolean, {
    nullable: true,
  })
  skipDuplicates?: boolean | undefined;
}
