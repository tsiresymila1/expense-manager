import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { UpdateOneActivityLogArgs } from "./args/UpdateOneActivityLogArgs";
import { ActivityLog } from "../../../models/ActivityLog";
import {
  transformInfoIntoPrismaArgs,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from "../../../helpers";

@TypeGraphQL.Resolver((_of) => ActivityLog)
export class UpdateOneActivityLogResolver {
  @TypeGraphQL.Mutation((_returns) => ActivityLog, {
    nullable: true,
  })
  async updateOneActivityLog(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateOneActivityLogArgs,
  ): Promise<ActivityLog | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).activityLog.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
