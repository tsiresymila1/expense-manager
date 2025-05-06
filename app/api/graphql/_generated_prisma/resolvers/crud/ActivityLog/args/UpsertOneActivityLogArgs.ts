import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ActivityLogCreateInput } from "../../../inputs/ActivityLogCreateInput";
import { ActivityLogUpdateInput } from "../../../inputs/ActivityLogUpdateInput";
import { ActivityLogWhereUniqueInput } from "../../../inputs/ActivityLogWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneActivityLogArgs {
  @TypeGraphQL.Field((_type) => ActivityLogWhereUniqueInput, {
    nullable: false,
  })
  where!: ActivityLogWhereUniqueInput;

  @TypeGraphQL.Field((_type) => ActivityLogCreateInput, {
    nullable: false,
  })
  create!: ActivityLogCreateInput;

  @TypeGraphQL.Field((_type) => ActivityLogUpdateInput, {
    nullable: false,
  })
  update!: ActivityLogUpdateInput;
}
