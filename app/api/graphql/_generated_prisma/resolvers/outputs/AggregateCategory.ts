import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CategoryCountAggregate } from "../outputs/CategoryCountAggregate";
import { CategoryMaxAggregate } from "../outputs/CategoryMaxAggregate";
import { CategoryMinAggregate } from "../outputs/CategoryMinAggregate";

@TypeGraphQL.ObjectType("AggregateCategory", {})
export class AggregateCategory {
  @TypeGraphQL.Field((_type) => CategoryCountAggregate, {
    nullable: true,
  })
  _count!: CategoryCountAggregate | null;

  @TypeGraphQL.Field((_type) => CategoryMinAggregate, {
    nullable: true,
  })
  _min!: CategoryMinAggregate | null;

  @TypeGraphQL.Field((_type) => CategoryMaxAggregate, {
    nullable: true,
  })
  _max!: CategoryMaxAggregate | null;
}
