import * as TypeGraphQL from "type-graphql";

export enum CategoryScalarFieldEnum {
  id = "id",
  name = "name",
  color = "color",
  value = "value",
  description = "description",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  userId = "userId",
}
TypeGraphQL.registerEnumType(CategoryScalarFieldEnum, {
  name: "CategoryScalarFieldEnum",
  description: undefined,
});
