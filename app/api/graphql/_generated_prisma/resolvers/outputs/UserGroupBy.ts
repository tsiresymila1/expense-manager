import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCountAggregate } from "../outputs/UserCountAggregate";
import { UserMaxAggregate } from "../outputs/UserMaxAggregate";
import { UserMinAggregate } from "../outputs/UserMinAggregate";

@TypeGraphQL.ObjectType("UserGroupBy", {})
export class UserGroupBy {
  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  id!: string;

  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  email!: string;

  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  name!: string | null;

  @TypeGraphQL.Field((_type) => Boolean, {
    nullable: false,
  })
  emailVerified!: boolean;

  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  image!: string | null;

  @TypeGraphQL.Field((_type) => Date, {
    nullable: false,
  })
  createdAt!: Date;

  @TypeGraphQL.Field((_type) => Date, {
    nullable: false,
  })
  updatedAt!: Date;

  @TypeGraphQL.Field((_type) => UserCountAggregate, {
    nullable: true,
  })
  _count!: UserCountAggregate | null;

  @TypeGraphQL.Field((_type) => UserMinAggregate, {
    nullable: true,
  })
  _min!: UserMinAggregate | null;

  @TypeGraphQL.Field((_type) => UserMaxAggregate, {
    nullable: true,
  })
  _max!: UserMaxAggregate | null;
}
