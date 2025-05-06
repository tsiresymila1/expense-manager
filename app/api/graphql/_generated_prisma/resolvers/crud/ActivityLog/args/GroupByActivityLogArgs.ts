import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ActivityLogOrderByWithAggregationInput } from "../../../inputs/ActivityLogOrderByWithAggregationInput";
import { ActivityLogScalarWhereWithAggregatesInput } from "../../../inputs/ActivityLogScalarWhereWithAggregatesInput";
import { ActivityLogWhereInput } from "../../../inputs/ActivityLogWhereInput";
import { ActivityLogScalarFieldEnum } from "../../../../enums/ActivityLogScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByActivityLogArgs {
  @TypeGraphQL.Field((_type) => ActivityLogWhereInput, {
    nullable: true,
  })
  where?: ActivityLogWhereInput | undefined;

  @TypeGraphQL.Field((_type) => [ActivityLogOrderByWithAggregationInput], {
    nullable: true,
  })
  orderBy?: ActivityLogOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field((_type) => [ActivityLogScalarFieldEnum], {
    nullable: false,
  })
  by!: Array<
    | "id"
    | "action"
    | "description"
    | "ipAddress"
    | "userAgent"
    | "createdAt"
    | "userId"
  >;

  @TypeGraphQL.Field((_type) => ActivityLogScalarWhereWithAggregatesInput, {
    nullable: true,
  })
  having?: ActivityLogScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  take?: number | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  skip?: number | undefined;
}
