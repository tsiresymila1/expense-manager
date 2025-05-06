import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ActivityLogCountAggregate } from "../outputs/ActivityLogCountAggregate";
import { ActivityLogMaxAggregate } from "../outputs/ActivityLogMaxAggregate";
import { ActivityLogMinAggregate } from "../outputs/ActivityLogMinAggregate";

@TypeGraphQL.ObjectType("AggregateActivityLog", {})
export class AggregateActivityLog {
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
