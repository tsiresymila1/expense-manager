import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ActivityLogWhereInput } from "../../inputs/ActivityLogWhereInput";

@TypeGraphQL.ArgsType()
export class UserCountActivityLogsArgs {
  @TypeGraphQL.Field((_type) => ActivityLogWhereInput, {
    nullable: true,
  })
  where?: ActivityLogWhereInput | undefined;
}
