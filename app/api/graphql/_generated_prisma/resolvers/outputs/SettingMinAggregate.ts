import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.ObjectType("SettingMinAggregate", {})
export class SettingMinAggregate {
  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  id!: string | null;

  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  key!: string | null;

  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  value!: string | null;

  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  userId!: string | null;
}
