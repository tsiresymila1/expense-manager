import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserUpdateWithoutActivityLogsInput } from "../inputs/UserUpdateWithoutActivityLogsInput";
import { UserWhereInput } from "../inputs/UserWhereInput";

@TypeGraphQL.InputType("UserUpdateToOneWithWhereWithoutActivityLogsInput", {})
export class UserUpdateToOneWithWhereWithoutActivityLogsInput {
  @TypeGraphQL.Field((_type) => UserWhereInput, {
    nullable: true,
  })
  where?: UserWhereInput | undefined;

  @TypeGraphQL.Field((_type) => UserUpdateWithoutActivityLogsInput, {
    nullable: false,
  })
  data!: UserUpdateWithoutActivityLogsInput;
}
