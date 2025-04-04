import "reflect-metadata";
import { buildSchemaSync } from "type-graphql";
import { CustomAuthChecker } from "./checker";
import { AppResolver } from "./features/app/resolver";

export function createSyncSchema() {
  return buildSchemaSync({
    resolvers: [AppResolver],
    authChecker: CustomAuthChecker,
    // container: Container,
  });
}
