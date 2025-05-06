import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindManyActivityLogArgs } from "./args/FindManyActivityLogArgs";
import { ActivityLog } from "../../../models/ActivityLog";
import {
  transformInfoIntoPrismaArgs,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from "../../../helpers";

@TypeGraphQL.Resolver((_of) => ActivityLog)
export class FindManyActivityLogResolver {
  @TypeGraphQL.Query((_returns) => [ActivityLog], {
    nullable: false,
  })
  async activityLogs(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindManyActivityLogArgs,
  ): Promise<ActivityLog[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).activityLog.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
