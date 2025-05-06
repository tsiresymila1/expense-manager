import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { GroupByActivityLogArgs } from "./args/GroupByActivityLogArgs";
import { ActivityLog } from "../../../models/ActivityLog";
import { ActivityLogGroupBy } from "../../outputs/ActivityLogGroupBy";
import {
  transformInfoIntoPrismaArgs,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from "../../../helpers";

@TypeGraphQL.Resolver((_of) => ActivityLog)
export class GroupByActivityLogResolver {
  @TypeGraphQL.Query((_returns) => [ActivityLogGroupBy], {
    nullable: false,
  })
  async groupByActivityLog(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: GroupByActivityLogArgs,
  ): Promise<ActivityLogGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } =
      transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).activityLog.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(
          ([_, v]) => v != null,
        ),
      ),
    });
  }
}
