import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ActivityLogWhereUniqueInput } from "../../../inputs/ActivityLogWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOneActivityLogArgs {
  @TypeGraphQL.Field((_type) => ActivityLogWhereUniqueInput, {
    nullable: false,
  })
  where!: ActivityLogWhereUniqueInput;
}
