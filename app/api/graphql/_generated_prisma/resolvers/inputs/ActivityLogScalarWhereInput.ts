import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("ActivityLogScalarWhereInput", {})
export class ActivityLogScalarWhereInput {
  @TypeGraphQL.Field((_type) => [ActivityLogScalarWhereInput], {
    nullable: true,
  })
  AND?: ActivityLogScalarWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => [ActivityLogScalarWhereInput], {
    nullable: true,
  })
  OR?: ActivityLogScalarWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => [ActivityLogScalarWhereInput], {
    nullable: true,
  })
  NOT?: ActivityLogScalarWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => StringFilter, {
    nullable: true,
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field((_type) => StringFilter, {
    nullable: true,
  })
  action?: StringFilter | undefined;

  @TypeGraphQL.Field((_type) => StringNullableFilter, {
    nullable: true,
  })
  description?: StringNullableFilter | undefined;

  @TypeGraphQL.Field((_type) => StringNullableFilter, {
    nullable: true,
  })
  ipAddress?: StringNullableFilter | undefined;

  @TypeGraphQL.Field((_type) => StringNullableFilter, {
    nullable: true,
  })
  userAgent?: StringNullableFilter | undefined;

  @TypeGraphQL.Field((_type) => DateTimeFilter, {
    nullable: true,
  })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field((_type) => StringFilter, {
    nullable: true,
  })
  userId?: StringFilter | undefined;
}
