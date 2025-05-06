import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ActivityLogCreateInput } from "../../../inputs/ActivityLogCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneActivityLogArgs {
  @TypeGraphQL.Field((_type) => ActivityLogCreateInput, {
    nullable: false,
  })
  data!: ActivityLogCreateInput;
}
