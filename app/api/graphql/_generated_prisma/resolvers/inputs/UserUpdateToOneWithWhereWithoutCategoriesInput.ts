import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserUpdateWithoutCategoriesInput } from "../inputs/UserUpdateWithoutCategoriesInput";
import { UserWhereInput } from "../inputs/UserWhereInput";

@TypeGraphQL.InputType("UserUpdateToOneWithWhereWithoutCategoriesInput", {})
export class UserUpdateToOneWithWhereWithoutCategoriesInput {
  @TypeGraphQL.Field((_type) => UserWhereInput, {
    nullable: true,
  })
  where?: UserWhereInput | undefined;

  @TypeGraphQL.Field((_type) => UserUpdateWithoutCategoriesInput, {
    nullable: false,
  })
  data!: UserUpdateWithoutCategoriesInput;
}
