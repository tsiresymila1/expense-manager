import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ActivityLogCreateWithoutUserInput } from "../inputs/ActivityLogCreateWithoutUserInput";
import { ActivityLogWhereUniqueInput } from "../inputs/ActivityLogWhereUniqueInput";

@TypeGraphQL.InputType("ActivityLogCreateOrConnectWithoutUserInput", {})
export class ActivityLogCreateOrConnectWithoutUserInput {
  @TypeGraphQL.Field((_type) => ActivityLogWhereUniqueInput, {
    nullable: false,
  })
  where!: ActivityLogWhereUniqueInput;

  @TypeGraphQL.Field((_type) => ActivityLogCreateWithoutUserInput, {
    nullable: false,
  })
  create!: ActivityLogCreateWithoutUserInput;
}
