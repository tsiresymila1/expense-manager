import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { JwksCountAggregate } from "../outputs/JwksCountAggregate";
import { JwksMaxAggregate } from "../outputs/JwksMaxAggregate";
import { JwksMinAggregate } from "../outputs/JwksMinAggregate";

@TypeGraphQL.ObjectType("AggregateJwks", {})
export class AggregateJwks {
  @TypeGraphQL.Field((_type) => JwksCountAggregate, {
    nullable: true,
  })
  _count!: JwksCountAggregate | null;

  @TypeGraphQL.Field((_type) => JwksMinAggregate, {
    nullable: true,
  })
  _min!: JwksMinAggregate | null;

  @TypeGraphQL.Field((_type) => JwksMaxAggregate, {
    nullable: true,
  })
  _max!: JwksMaxAggregate | null;
}
