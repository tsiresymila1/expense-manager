import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { User } from "../../models/User";

@TypeGraphQL.ObjectType("CreateManyAndReturnCategory", {})
export class CreateManyAndReturnCategory {
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

  @TypeGraphQL.Field((_type) => User, {
    nullable: false,
  })
  user!: User;
}
