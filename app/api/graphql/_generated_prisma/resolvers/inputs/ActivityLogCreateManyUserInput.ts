import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("ActivityLogCreateManyUserInput", {})
export class ActivityLogCreateManyUserInput {
  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  id?: string | undefined;

  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  action!: string;

  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  description?: string | undefined;

  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  ipAddress?: string | undefined;

  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  userAgent?: string | undefined;

  @TypeGraphQL.Field((_type) => Date, {
    nullable: true,
  })
  createdAt?: Date | undefined;
}
