import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ActivityLogOrderByWithRelationInput } from "../../../inputs/ActivityLogOrderByWithRelationInput";
import { ActivityLogWhereInput } from "../../../inputs/ActivityLogWhereInput";
import { ActivityLogWhereUniqueInput } from "../../../inputs/ActivityLogWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateActivityLogArgs {
  @TypeGraphQL.Field((_type) => ActivityLogWhereInput, {
    nullable: true,
  })
  where?: ActivityLogWhereInput | undefined;

  @TypeGraphQL.Field((_type) => [ActivityLogOrderByWithRelationInput], {
    nullable: true,
  })
  orderBy?: ActivityLogOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field((_type) => ActivityLogWhereUniqueInput, {
    nullable: true,
  })
  cursor?: ActivityLogWhereUniqueInput | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  take?: number | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  skip?: number | undefined;
}
