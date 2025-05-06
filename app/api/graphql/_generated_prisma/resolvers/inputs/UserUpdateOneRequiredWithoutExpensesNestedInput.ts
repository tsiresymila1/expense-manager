import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutExpensesInput } from "../inputs/UserCreateOrConnectWithoutExpensesInput";
import { UserCreateWithoutExpensesInput } from "../inputs/UserCreateWithoutExpensesInput";
import { UserUpdateToOneWithWhereWithoutExpensesInput } from "../inputs/UserUpdateToOneWithWhereWithoutExpensesInput";
import { UserUpsertWithoutExpensesInput } from "../inputs/UserUpsertWithoutExpensesInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserUpdateOneRequiredWithoutExpensesNestedInput", {})
export class UserUpdateOneRequiredWithoutExpensesNestedInput {
  @TypeGraphQL.Field((_type) => UserCreateWithoutExpensesInput, {
    nullable: true,
  })
  create?: UserCreateWithoutExpensesInput | undefined;

  @TypeGraphQL.Field((_type) => UserCreateOrConnectWithoutExpensesInput, {
    nullable: true,
  })
  connectOrCreate?: UserCreateOrConnectWithoutExpensesInput | undefined;

  @TypeGraphQL.Field((_type) => UserUpsertWithoutExpensesInput, {
    nullable: true,
  })
  upsert?: UserUpsertWithoutExpensesInput | undefined;

  @TypeGraphQL.Field((_type) => UserWhereUniqueInput, {
    nullable: true,
  })
  connect?: UserWhereUniqueInput | undefined;

  @TypeGraphQL.Field((_type) => UserUpdateToOneWithWhereWithoutExpensesInput, {
    nullable: true,
  })
  update?: UserUpdateToOneWithWhereWithoutExpensesInput | undefined;
}
