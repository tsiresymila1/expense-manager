import "reflect-metadata";
import { buildSchemaSync } from "type-graphql";
import { CustomAuthChecker } from "./checker";
import { AppResolver } from "./features/app/app.resolver";
import { CategoryResolver } from "./features/category/category.resolver";
import { ExpenseResolver } from "./features/expense/expense.resolver";

export function createSyncSchema() {
  return buildSchemaSync({
    resolvers: [AppResolver, ExpenseResolver, CategoryResolver],
    authChecker: CustomAuthChecker,
    // container: Container,
  });
}
