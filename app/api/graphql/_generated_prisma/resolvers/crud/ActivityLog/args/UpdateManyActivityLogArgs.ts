import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ActivityLogUpdateManyMutationInput } from "../../../inputs/ActivityLogUpdateManyMutationInput";
import { ActivityLogWhereInput } from "../../../inputs/ActivityLogWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyActivityLogArgs {
  @TypeGraphQL.Field((_type) => ActivityLogUpdateManyMutationInput, {
    nullable: false,
  })
  data!: ActivityLogUpdateManyMutationInput;

  @TypeGraphQL.Field((_type) => ActivityLogWhereInput, {
    nullable: true,
  })
  where?: ActivityLogWhereInput | undefined;
}
