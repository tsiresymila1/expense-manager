import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ActivityLogCreateManyInput } from "../../../inputs/ActivityLogCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyActivityLogArgs {
  @TypeGraphQL.Field((_type) => [ActivityLogCreateManyInput], {
    nullable: false,
  })
  data!: ActivityLogCreateManyInput[];

  @TypeGraphQL.Field((_type) => Boolean, {
    nullable: true,
  })
  skipDuplicates?: boolean | undefined;
}
