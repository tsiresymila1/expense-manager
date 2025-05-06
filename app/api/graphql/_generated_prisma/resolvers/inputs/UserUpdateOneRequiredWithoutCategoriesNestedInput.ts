import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutCategoriesInput } from "../inputs/UserCreateOrConnectWithoutCategoriesInput";
import { UserCreateWithoutCategoriesInput } from "../inputs/UserCreateWithoutCategoriesInput";
import { UserUpdateToOneWithWhereWithoutCategoriesInput } from "../inputs/UserUpdateToOneWithWhereWithoutCategoriesInput";
import { UserUpsertWithoutCategoriesInput } from "../inputs/UserUpsertWithoutCategoriesInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserUpdateOneRequiredWithoutCategoriesNestedInput", {})
export class UserUpdateOneRequiredWithoutCategoriesNestedInput {
  @TypeGraphQL.Field((_type) => UserCreateWithoutCategoriesInput, {
    nullable: true,
  })
  create?: UserCreateWithoutCategoriesInput | undefined;

  @TypeGraphQL.Field((_type) => UserCreateOrConnectWithoutCategoriesInput, {
    nullable: true,
  })
  connectOrCreate?: UserCreateOrConnectWithoutCategoriesInput | undefined;

  @TypeGraphQL.Field((_type) => UserUpsertWithoutCategoriesInput, {
    nullable: true,
  })
  upsert?: UserUpsertWithoutCategoriesInput | undefined;

  @TypeGraphQL.Field((_type) => UserWhereUniqueInput, {
    nullable: true,
  })
  connect?: UserWhereUniqueInput | undefined;

  @TypeGraphQL.Field(
    (_type) => UserUpdateToOneWithWhereWithoutCategoriesInput,
    {
      nullable: true,
    },
  )
  update?: UserUpdateToOneWithWhereWithoutCategoriesInput | undefined;
}
