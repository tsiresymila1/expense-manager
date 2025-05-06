import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserUpdateWithoutExpensesInput } from "../inputs/UserUpdateWithoutExpensesInput";
import { UserWhereInput } from "../inputs/UserWhereInput";

@TypeGraphQL.InputType("UserUpdateToOneWithWhereWithoutExpensesInput", {})
export class UserUpdateToOneWithWhereWithoutExpensesInput {
  @TypeGraphQL.Field((_type) => UserWhereInput, {
    nullable: true,
  })
  where?: UserWhereInput | undefined;

  @TypeGraphQL.Field((_type) => UserUpdateWithoutExpensesInput, {
    nullable: false,
  })
  data!: UserUpdateWithoutExpensesInput;
}
