import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCountAccountsArgs } from "./args/UserCountAccountsArgs";
import { UserCountActivityLogsArgs } from "./args/UserCountActivityLogsArgs";
import { UserCountCategoriesArgs } from "./args/UserCountCategoriesArgs";
import { UserCountExpensesArgs } from "./args/UserCountExpensesArgs";
import { UserCountSessionsArgs } from "./args/UserCountSessionsArgs";
import { UserCountSettingArgs } from "./args/UserCountSettingArgs";

@TypeGraphQL.ObjectType("UserCount", {})
export class UserCount {
  expenses!: number;
  categories!: number;
  sessions!: number;
  accounts!: number;
  Setting!: number;
  activityLogs!: number;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    name: "expenses",
    nullable: false,
  })
  getExpenses(
    @TypeGraphQL.Root() root: UserCount,
    @TypeGraphQL.Args() args: UserCountExpensesArgs,
  ): number {
    return root.expenses;
  }

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    name: "categories",
    nullable: false,
  })
  getCategories(
    @TypeGraphQL.Root() root: UserCount,
    @TypeGraphQL.Args() args: UserCountCategoriesArgs,
  ): number {
    return root.categories;
  }

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    name: "sessions",
    nullable: false,
  })
  getSessions(
    @TypeGraphQL.Root() root: UserCount,
    @TypeGraphQL.Args() args: UserCountSessionsArgs,
  ): number {
    return root.sessions;
  }

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    name: "accounts",
    nullable: false,
  })
  getAccounts(
    @TypeGraphQL.Root() root: UserCount,
    @TypeGraphQL.Args() args: UserCountAccountsArgs,
  ): number {
    return root.accounts;
  }

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    name: "Setting",
    nullable: false,
  })
  getSetting(
    @TypeGraphQL.Root() root: UserCount,
    @TypeGraphQL.Args() args: UserCountSettingArgs,
  ): number {
    return root.Setting;
  }

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    name: "activityLogs",
    nullable: false,
  })
  getActivityLogs(
    @TypeGraphQL.Root() root: UserCount,
    @TypeGraphQL.Args() args: UserCountActivityLogsArgs,
  ): number {
    return root.activityLogs;
  }
}
