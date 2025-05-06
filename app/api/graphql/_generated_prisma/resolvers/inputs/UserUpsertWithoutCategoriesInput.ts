import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutCategoriesInput } from "../inputs/UserCreateWithoutCategoriesInput";
import { UserUpdateWithoutCategoriesInput } from "../inputs/UserUpdateWithoutCategoriesInput";
import { UserWhereInput } from "../inputs/UserWhereInput";

@TypeGraphQL.InputType("UserUpsertWithoutCategoriesInput", {})
export class UserUpsertWithoutCategoriesInput {
  @TypeGraphQL.Field((_type) => UserUpdateWithoutCategoriesInput, {
    nullable: false,
  })
  update!: UserUpdateWithoutCategoriesInput;

  @TypeGraphQL.Field((_type) => UserCreateWithoutCategoriesInput, {
    nullable: false,
  })
  create!: UserCreateWithoutCategoriesInput;

  @TypeGraphQL.Field((_type) => UserWhereInput, {
    nullable: true,
  })
  where?: UserWhereInput | undefined;
}
