import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { Account } from "../../../models/Account";
import { ActivityLog } from "../../../models/ActivityLog";
import { Category } from "../../../models/Category";
import { Expense } from "../../../models/Expense";
import { Session } from "../../../models/Session";
import { Setting } from "../../../models/Setting";
import { User } from "../../../models/User";
import { UserAccountsArgs } from "./args/UserAccountsArgs";
import { UserActivityLogsArgs } from "./args/UserActivityLogsArgs";
import { UserCategoriesArgs } from "./args/UserCategoriesArgs";
import { UserExpensesArgs } from "./args/UserExpensesArgs";
import { UserSessionsArgs } from "./args/UserSessionsArgs";
import { UserSettingArgs } from "./args/UserSettingArgs";
import {
  transformInfoIntoPrismaArgs,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from "../../../helpers";

@TypeGraphQL.Resolver((_of) => User)
export class UserRelationsResolver {
  @TypeGraphQL.FieldResolver((_type) => [Expense], {
    nullable: false,
  })
  async expenses(
    @TypeGraphQL.Root() user: User,
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UserExpensesArgs,
  ): Promise<Expense[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx)
      .user.findUniqueOrThrow({
        where: {
          id: user.id,
        },
      })
      .expenses({
        ...args,
        ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
      });
  }

  @TypeGraphQL.FieldResolver((_type) => [Category], {
    nullable: false,
  })
  async categories(
    @TypeGraphQL.Root() user: User,
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UserCategoriesArgs,
  ): Promise<Category[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx)
      .user.findUniqueOrThrow({
        where: {
          id: user.id,
        },
      })
      .categories({
        ...args,
        ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
      });
  }

  @TypeGraphQL.FieldResolver((_type) => [Session], {
    nullable: false,
  })
  async sessions(
    @TypeGraphQL.Root() user: User,
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UserSessionsArgs,
  ): Promise<Session[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx)
      .user.findUniqueOrThrow({
        where: {
          id: user.id,
        },
      })
      .sessions({
        ...args,
        ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
      });
  }

  @TypeGraphQL.FieldResolver((_type) => [Account], {
    nullable: false,
  })
  async accounts(
    @TypeGraphQL.Root() user: User,
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UserAccountsArgs,
  ): Promise<Account[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx)
      .user.findUniqueOrThrow({
        where: {
          id: user.id,
        },
      })
      .accounts({
        ...args,
        ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
      });
  }

  @TypeGraphQL.FieldResolver((_type) => [Setting], {
    nullable: false,
  })
  async Setting(
    @TypeGraphQL.Root() user: User,
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UserSettingArgs,
  ): Promise<Setting[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx)
      .user.findUniqueOrThrow({
        where: {
          id: user.id,
        },
      })
      .Setting({
        ...args,
        ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
      });
  }

  @TypeGraphQL.FieldResolver((_type) => [ActivityLog], {
    nullable: false,
  })
  async activityLogs(
    @TypeGraphQL.Root() user: User,
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UserActivityLogsArgs,
  ): Promise<ActivityLog[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx)
      .user.findUniqueOrThrow({
        where: {
          id: user.id,
        },
      })
      .activityLogs({
        ...args,
        ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
      });
  }
}
