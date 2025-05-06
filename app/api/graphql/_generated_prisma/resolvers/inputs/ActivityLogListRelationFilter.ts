import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ActivityLogWhereInput } from "../inputs/ActivityLogWhereInput";

@TypeGraphQL.InputType("ActivityLogListRelationFilter", {})
export class ActivityLogListRelationFilter {
  @TypeGraphQL.Field((_type) => ActivityLogWhereInput, {
    nullable: true,
  })
  every?: ActivityLogWhereInput | undefined;

  @TypeGraphQL.Field((_type) => ActivityLogWhereInput, {
    nullable: true,
  })
  some?: ActivityLogWhereInput | undefined;

  @TypeGraphQL.Field((_type) => ActivityLogWhereInput, {
    nullable: true,
  })
  none?: ActivityLogWhereInput | undefined;
}
