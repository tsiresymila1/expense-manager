import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ActivityLogUpdateInput } from "../../../inputs/ActivityLogUpdateInput";
import { ActivityLogWhereUniqueInput } from "../../../inputs/ActivityLogWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneActivityLogArgs {
  @TypeGraphQL.Field((_type) => ActivityLogUpdateInput, {
    nullable: false,
  })
  data!: ActivityLogUpdateInput;

  @TypeGraphQL.Field((_type) => ActivityLogWhereUniqueInput, {
    nullable: false,
  })
  where!: ActivityLogWhereUniqueInput;
}
