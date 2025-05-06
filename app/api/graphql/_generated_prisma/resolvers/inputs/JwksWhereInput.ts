import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("JwksWhereInput", {})
export class JwksWhereInput {
  @TypeGraphQL.Field((_type) => [JwksWhereInput], {
    nullable: true,
  })
  AND?: JwksWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => [JwksWhereInput], {
    nullable: true,
  })
  OR?: JwksWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => [JwksWhereInput], {
    nullable: true,
  })
  NOT?: JwksWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => StringFilter, {
    nullable: true,
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field((_type) => StringFilter, {
    nullable: true,
  })
  publicKey?: StringFilter | undefined;

  @TypeGraphQL.Field((_type) => StringFilter, {
    nullable: true,
  })
  privateKey?: StringFilter | undefined;

  @TypeGraphQL.Field((_type) => DateTimeFilter, {
    nullable: true,
  })
  createdAt?: DateTimeFilter | undefined;
}
