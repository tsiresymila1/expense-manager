import * as TypeGraphQL from "type-graphql";

export enum ExpenseScalarFieldEnum {
  id = "id",
  amount = "amount",
  description = "description",
  notes = "notes",
  payment = "payment",
  date = "date",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  userId = "userId",
  categoryId = "categoryId",
}
TypeGraphQL.registerEnumType(ExpenseScalarFieldEnum, {
  name: "ExpenseScalarFieldEnum",
  description: undefined,
});
