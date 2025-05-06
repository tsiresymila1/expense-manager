import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutActivityLogsInput } from "../inputs/UserCreateOrConnectWithoutActivityLogsInput";
import { UserCreateWithoutActivityLogsInput } from "../inputs/UserCreateWithoutActivityLogsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateNestedOneWithoutActivityLogsInput", {})
export class UserCreateNestedOneWithoutActivityLogsInput {
  @TypeGraphQL.Field((_type) => UserCreateWithoutActivityLogsInput, {
    nullable: true,
  })
  create?: UserCreateWithoutActivityLogsInput | undefined;

  @TypeGraphQL.Field((_type) => UserCreateOrConnectWithoutActivityLogsInput, {
    nullable: true,
  })
  connectOrCreate?: UserCreateOrConnectWithoutActivityLogsInput | undefined;

  @TypeGraphQL.Field((_type) => UserWhereUniqueInput, {
    nullable: true,
  })
  connect?: UserWhereUniqueInput | undefined;
}
