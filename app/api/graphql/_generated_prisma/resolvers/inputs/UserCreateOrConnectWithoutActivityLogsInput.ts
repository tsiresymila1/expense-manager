import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutActivityLogsInput } from "../inputs/UserCreateWithoutActivityLogsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateOrConnectWithoutActivityLogsInput", {})
export class UserCreateOrConnectWithoutActivityLogsInput {
  @TypeGraphQL.Field((_type) => UserWhereUniqueInput, {
    nullable: false,
  })
  where!: UserWhereUniqueInput;

  @TypeGraphQL.Field((_type) => UserCreateWithoutActivityLogsInput, {
    nullable: false,
  })
  create!: UserCreateWithoutActivityLogsInput;
}
