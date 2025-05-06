import * as TypeGraphQL from "type-graphql";

export enum ActivityLogScalarFieldEnum {
  id = "id",
  action = "action",
  description = "description",
  ipAddress = "ipAddress",
  userAgent = "userAgent",
  createdAt = "createdAt",
  userId = "userId",
}
TypeGraphQL.registerEnumType(ActivityLogScalarFieldEnum, {
  name: "ActivityLogScalarFieldEnum",
  description: undefined,
});
