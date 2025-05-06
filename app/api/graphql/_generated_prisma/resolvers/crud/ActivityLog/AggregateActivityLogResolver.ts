import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateActivityLogArgs } from "./args/AggregateActivityLogArgs";
import { ActivityLog } from "../../../models/ActivityLog";
import { AggregateActivityLog } from "../../outputs/AggregateActivityLog";
import {
  transformInfoIntoPrismaArgs,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from "../../../helpers";

@TypeGraphQL.Resolver((_of) => ActivityLog)
export class AggregateActivityLogResolver {
  @TypeGraphQL.Query((_returns) => AggregateActivityLog, {
    nullable: false,
  })
  async aggregateActivityLog(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: AggregateActivityLogArgs,
  ): Promise<AggregateActivityLog> {
    return getPrismaFromContext(ctx).activityLog.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
