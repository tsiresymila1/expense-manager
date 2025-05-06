import * as TypeGraphQL from "type-graphql";

export enum JwksScalarFieldEnum {
  id = "id",
  publicKey = "publicKey",
  privateKey = "privateKey",
  createdAt = "createdAt",
}
TypeGraphQL.registerEnumType(JwksScalarFieldEnum, {
  name: "JwksScalarFieldEnum",
  description: undefined,
});
