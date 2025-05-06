import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SettingCountAggregate } from "../outputs/SettingCountAggregate";
import { SettingMaxAggregate } from "../outputs/SettingMaxAggregate";
import { SettingMinAggregate } from "../outputs/SettingMinAggregate";

@TypeGraphQL.ObjectType("SettingGroupBy", {})
export class SettingGroupBy {
  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  id!: string;

  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  key!: string;

  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  value!: string | null;

  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  userId!: string;

  @TypeGraphQL.Field((_type) => SettingCountAggregate, {
    nullable: true,
  })
  _count!: SettingCountAggregate | null;

  @TypeGraphQL.Field((_type) => SettingMinAggregate, {
    nullable: true,
  })
  _min!: SettingMinAggregate | null;

  @TypeGraphQL.Field((_type) => SettingMaxAggregate, {
    nullable: true,
  })
  _max!: SettingMaxAggregate | null;
}
