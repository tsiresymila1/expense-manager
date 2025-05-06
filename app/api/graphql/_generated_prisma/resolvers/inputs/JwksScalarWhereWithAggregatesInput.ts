import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("JwksScalarWhereWithAggregatesInput", {})
export class JwksScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field((_type) => [JwksScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  AND?: JwksScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field((_type) => [JwksScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  OR?: JwksScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field((_type) => [JwksScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  NOT?: JwksScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field((_type) => StringWithAggregatesFilter, {
    nullable: true,
  })
  id?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field((_type) => StringWithAggregatesFilter, {
    nullable: true,
  })
  publicKey?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field((_type) => StringWithAggregatesFilter, {
    nullable: true,
  })
  privateKey?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field((_type) => DateTimeWithAggregatesFilter, {
    nullable: true,
  })
  createdAt?: DateTimeWithAggregatesFilter | undefined;
}
