import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ActivityLogCreateNestedManyWithoutUserInput } from "../inputs/ActivityLogCreateNestedManyWithoutUserInput";
import { CategoryCreateNestedManyWithoutUserInput } from "../inputs/CategoryCreateNestedManyWithoutUserInput";
import { ExpenseCreateNestedManyWithoutUserInput } from "../inputs/ExpenseCreateNestedManyWithoutUserInput";
import { SessionCreateNestedManyWithoutUserInput } from "../inputs/SessionCreateNestedManyWithoutUserInput";
import { SettingCreateNestedManyWithoutUserInput } from "../inputs/SettingCreateNestedManyWithoutUserInput";

@TypeGraphQL.InputType("UserCreateWithoutAccountsInput", {})
export class UserCreateWithoutAccountsInput {
  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  id?: string | undefined;

  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  email!: string;

  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  name?: string | undefined;

  @TypeGraphQL.Field((_type) => Boolean, {
    nullable: true,
  })
  emailVerified?: boolean | undefined;

  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  image?: string | undefined;

  @TypeGraphQL.Field((_type) => Date, {
    nullable: true,
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field((_type) => Date, {
    nullable: true,
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field((_type) => ExpenseCreateNestedManyWithoutUserInput, {
    nullable: true,
  })
  expenses?: ExpenseCreateNestedManyWithoutUserInput | undefined;

  @TypeGraphQL.Field((_type) => CategoryCreateNestedManyWithoutUserInput, {
    nullable: true,
  })
  categories?: CategoryCreateNestedManyWithoutUserInput | undefined;

  @TypeGraphQL.Field((_type) => SessionCreateNestedManyWithoutUserInput, {
    nullable: true,
  })
  sessions?: SessionCreateNestedManyWithoutUserInput | undefined;

  @TypeGraphQL.Field((_type) => SettingCreateNestedManyWithoutUserInput, {
    nullable: true,
  })
  Setting?: SettingCreateNestedManyWithoutUserInput | undefined;

  @TypeGraphQL.Field((_type) => ActivityLogCreateNestedManyWithoutUserInput, {
    nullable: true,
  })
  activityLogs?: ActivityLogCreateNestedManyWithoutUserInput | undefined;
}
