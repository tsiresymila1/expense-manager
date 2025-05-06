import * as TypeGraphQL from "type-graphql";

export enum SettingScalarFieldEnum {
  id = "id",
  key = "key",
  value = "value",
  userId = "userId",
}
TypeGraphQL.registerEnumType(SettingScalarFieldEnum, {
  name: "SettingScalarFieldEnum",
  description: undefined,
});
