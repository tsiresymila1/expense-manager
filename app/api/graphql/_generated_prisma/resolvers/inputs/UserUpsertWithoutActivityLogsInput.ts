import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutActivityLogsInput } from "../inputs/UserCreateWithoutActivityLogsInput";
import { UserUpdateWithoutActivityLogsInput } from "../inputs/UserUpdateWithoutActivityLogsInput";
import { UserWhereInput } from "../inputs/UserWhereInput";

@TypeGraphQL.InputType("UserUpsertWithoutActivityLogsInput", {})
export class UserUpsertWithoutActivityLogsInput {
  @TypeGraphQL.Field((_type) => UserUpdateWithoutActivityLogsInput, {
    nullable: false,
  })
  update!: UserUpdateWithoutActivityLogsInput;

  @TypeGraphQL.Field((_type) => UserCreateWithoutActivityLogsInput, {
    nullable: false,
  })
  create!: UserCreateWithoutActivityLogsInput;

  @TypeGraphQL.Field((_type) => UserWhereInput, {
    nullable: true,
  })
  where?: UserWhereInput | undefined;
}
