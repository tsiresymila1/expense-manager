import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserUpdateOneRequiredWithoutSettingNestedInput } from "../inputs/UserUpdateOneRequiredWithoutSettingNestedInput";

@TypeGraphQL.InputType("SettingUpdateInput", {})
export class SettingUpdateInput {
  @TypeGraphQL.Field((_type) => StringFieldUpdateOperationsInput, {
    nullable: true,
  })
  id?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field((_type) => StringFieldUpdateOperationsInput, {
    nullable: true,
  })
  key?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field((_type) => NullableStringFieldUpdateOperationsInput, {
    nullable: true,
  })
  value?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(
    (_type) => UserUpdateOneRequiredWithoutSettingNestedInput,
    {
      nullable: true,
    },
  )
  user?: UserUpdateOneRequiredWithoutSettingNestedInput | undefined;
}
