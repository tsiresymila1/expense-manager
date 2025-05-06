import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AccountUpdateManyWithoutUserNestedInput } from "../inputs/AccountUpdateManyWithoutUserNestedInput";
import { ActivityLogUpdateManyWithoutUserNestedInput } from "../inputs/ActivityLogUpdateManyWithoutUserNestedInput";
import { BoolFieldUpdateOperationsInput } from "../inputs/BoolFieldUpdateOperationsInput";
import { CategoryUpdateManyWithoutUserNestedInput } from "../inputs/CategoryUpdateManyWithoutUserNestedInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { ExpenseUpdateManyWithoutUserNestedInput } from "../inputs/ExpenseUpdateManyWithoutUserNestedInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { SettingUpdateManyWithoutUserNestedInput } from "../inputs/SettingUpdateManyWithoutUserNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("UserUpdateWithoutSessionsInput", {})
export class UserUpdateWithoutSessionsInput {
  @TypeGraphQL.Field((_type) => StringFieldUpdateOperationsInput, {
    nullable: true,
  })
  id?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field((_type) => StringFieldUpdateOperationsInput, {
    nullable: true,
  })
  email?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field((_type) => NullableStringFieldUpdateOperationsInput, {
    nullable: true,
  })
  name?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field((_type) => BoolFieldUpdateOperationsInput, {
    nullable: true,
  })
  emailVerified?: BoolFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field((_type) => NullableStringFieldUpdateOperationsInput, {
    nullable: true,
  })
  image?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field((_type) => DateTimeFieldUpdateOperationsInput, {
    nullable: true,
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field((_type) => DateTimeFieldUpdateOperationsInput, {
    nullable: true,
  })
  updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field((_type) => ExpenseUpdateManyWithoutUserNestedInput, {
    nullable: true,
  })
  expenses?: ExpenseUpdateManyWithoutUserNestedInput | undefined;

  @TypeGraphQL.Field((_type) => CategoryUpdateManyWithoutUserNestedInput, {
    nullable: true,
  })
  categories?: CategoryUpdateManyWithoutUserNestedInput | undefined;

  @TypeGraphQL.Field((_type) => AccountUpdateManyWithoutUserNestedInput, {
    nullable: true,
  })
  accounts?: AccountUpdateManyWithoutUserNestedInput | undefined;

  @TypeGraphQL.Field((_type) => SettingUpdateManyWithoutUserNestedInput, {
    nullable: true,
  })
  Setting?: SettingUpdateManyWithoutUserNestedInput | undefined;

  @TypeGraphQL.Field((_type) => ActivityLogUpdateManyWithoutUserNestedInput, {
    nullable: true,
  })
  activityLogs?: ActivityLogUpdateManyWithoutUserNestedInput | undefined;
}
