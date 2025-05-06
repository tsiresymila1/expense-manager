import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { JwksCountAggregate } from "../outputs/JwksCountAggregate";
import { JwksMaxAggregate } from "../outputs/JwksMaxAggregate";
import { JwksMinAggregate } from "../outputs/JwksMinAggregate";

@TypeGraphQL.ObjectType("JwksGroupBy", {})
export class JwksGroupBy {
  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  id!: string;

  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  publicKey!: string;

  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  privateKey!: string;

  @TypeGraphQL.Field((_type) => Date, {
    nullable: false,
  })
  createdAt!: Date;

  @TypeGraphQL.Field((_type) => JwksCountAggregate, {
    nullable: true,
  })
  _count!: JwksCountAggregate | null;

  @TypeGraphQL.Field((_type) => JwksMinAggregate, {
    nullable: true,
  })
  _min!: JwksMinAggregate | null;

  @TypeGraphQL.Field((_type) => JwksMaxAggregate, {
    nullable: true,
  })
  _max!: JwksMaxAggregate | null;
}
