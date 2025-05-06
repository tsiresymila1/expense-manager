import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ActivityLogScalarWhereInput } from "../inputs/ActivityLogScalarWhereInput";
import { ActivityLogUpdateManyMutationInput } from "../inputs/ActivityLogUpdateManyMutationInput";

@TypeGraphQL.InputType("ActivityLogUpdateManyWithWhereWithoutUserInput", {})
export class ActivityLogUpdateManyWithWhereWithoutUserInput {
  @TypeGraphQL.Field((_type) => ActivityLogScalarWhereInput, {
    nullable: false,
  })
  where!: ActivityLogScalarWhereInput;

  @TypeGraphQL.Field((_type) => ActivityLogUpdateManyMutationInput, {
    nullable: false,
  })
  data!: ActivityLogUpdateManyMutationInput;
}
