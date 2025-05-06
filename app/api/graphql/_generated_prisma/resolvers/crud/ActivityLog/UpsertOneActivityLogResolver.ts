import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { UpsertOneActivityLogArgs } from "./args/UpsertOneActivityLogArgs";
import { ActivityLog } from "../../../models/ActivityLog";
import {
  transformInfoIntoPrismaArgs,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from "../../../helpers";

@TypeGraphQL.Resolver((_of) => ActivityLog)
export class UpsertOneActivityLogResolver {
  @TypeGraphQL.Mutation((_returns) => ActivityLog, {
    nullable: false,
  })
  async upsertOneActivityLog(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpsertOneActivityLogArgs,
  ): Promise<ActivityLog> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).activityLog.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
