import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ActivityLogCreateManyUserInputEnvelope } from "../inputs/ActivityLogCreateManyUserInputEnvelope";
import { ActivityLogCreateOrConnectWithoutUserInput } from "../inputs/ActivityLogCreateOrConnectWithoutUserInput";
import { ActivityLogCreateWithoutUserInput } from "../inputs/ActivityLogCreateWithoutUserInput";
import { ActivityLogWhereUniqueInput } from "../inputs/ActivityLogWhereUniqueInput";

@TypeGraphQL.InputType("ActivityLogCreateNestedManyWithoutUserInput", {})
export class ActivityLogCreateNestedManyWithoutUserInput {
  @TypeGraphQL.Field((_type) => [ActivityLogCreateWithoutUserInput], {
    nullable: true,
  })
  create?: ActivityLogCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field((_type) => [ActivityLogCreateOrConnectWithoutUserInput], {
    nullable: true,
  })
  connectOrCreate?: ActivityLogCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field((_type) => ActivityLogCreateManyUserInputEnvelope, {
    nullable: true,
  })
  createMany?: ActivityLogCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field((_type) => [ActivityLogWhereUniqueInput], {
    nullable: true,
  })
  connect?: ActivityLogWhereUniqueInput[] | undefined;
}
