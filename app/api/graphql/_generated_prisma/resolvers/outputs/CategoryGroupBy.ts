import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CategoryCountAggregate } from "../outputs/CategoryCountAggregate";
import { CategoryMaxAggregate } from "../outputs/CategoryMaxAggregate";
import { CategoryMinAggregate } from "../outputs/CategoryMinAggregate";

@TypeGraphQL.ObjectType("CategoryGroupBy", {})
export class CategoryGroupBy {
  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  id!: string;

  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  name!: string;

  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  color!: string | null;

  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  value!: string | null;

  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  description!: string | null;

  @TypeGraphQL.Field((_type) => Date, {
    nullable: false,
  })
  createdAt!: Date;

  @TypeGraphQL.Field((_type) => Date, {
    nullable: false,
  })
  updatedAt!: Date;

  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  userId!: string;

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
