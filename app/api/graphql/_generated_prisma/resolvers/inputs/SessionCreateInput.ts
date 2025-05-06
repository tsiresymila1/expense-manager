import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateNestedOneWithoutSessionsInput } from "../inputs/UserCreateNestedOneWithoutSessionsInput";

@TypeGraphQL.InputType("SessionCreateInput", {})
export class SessionCreateInput {
  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  id?: string | undefined;

  @TypeGraphQL.Field((_type) => Date, {
    nullable: false,
  })
  expiresAt!: Date;

  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  token!: string;

  @TypeGraphQL.Field((_type) => Date, {
    nullable: false,
  })
  createdAt!: Date;

  @TypeGraphQL.Field((_type) => Date, {
    nullable: false,
  })
  updatedAt!: Date;

  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  ipAddress?: string | undefined;

  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  userAgent?: string | undefined;

  @TypeGraphQL.Field((_type) => UserCreateNestedOneWithoutSessionsInput, {
    nullable: false,
  })
  user!: UserCreateNestedOneWithoutSessionsInput;
}
