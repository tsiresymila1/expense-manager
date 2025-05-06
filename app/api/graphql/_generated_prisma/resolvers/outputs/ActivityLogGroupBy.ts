import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ActivityLogCountAggregate } from "../outputs/ActivityLogCountAggregate";
import { ActivityLogMaxAggregate } from "../outputs/ActivityLogMaxAggregate";
import { ActivityLogMinAggregate } from "../outputs/ActivityLogMinAggregate";

@TypeGraphQL.ObjectType("ActivityLogGroupBy", {})
export class ActivityLogGroupBy {
  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  id!: string;

  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  action!: string;

  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  description!: string | null;

  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  ipAddress!: string | null;

  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  userAgent!: string | null;

  @TypeGraphQL.Field((_type) => Date, {
    nullable: false,
  })
  createdAt!: Date;

  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  userId!: string;

  @TypeGraphQL.Field((_type) => ActivityLogCountAggregate, {
    nullable: true,
  })
  _count!: ActivityLogCountAggregate | null;

  @TypeGraphQL.Field((_type) => ActivityLogMinAggregate, {
    nullable: true,
  })
  _min!: ActivityLogMinAggregate | null;

  @TypeGraphQL.Field((_type) => ActivityLogMaxAggregate, {
    nullable: true,
  })
  _max!: ActivityLogMaxAggregate | null;
}
