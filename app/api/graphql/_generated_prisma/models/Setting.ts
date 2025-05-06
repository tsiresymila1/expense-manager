import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { User } from "../models/User";

@TypeGraphQL.ObjectType("Setting", {})
export class Setting {
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
  value?: string | null;

  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  userId!: string;

  user?: User;
}
