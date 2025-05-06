import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { DeleteOneActivityLogArgs } from "./args/DeleteOneActivityLogArgs";
import { ActivityLog } from "../../../models/ActivityLog";
import {
  transformInfoIntoPrismaArgs,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from "../../../helpers";

@TypeGraphQL.Resolver((_of) => ActivityLog)
export class DeleteOneActivityLogResolver {
  @TypeGraphQL.Mutation((_returns) => ActivityLog, {
    nullable: true,
  })
  async deleteOneActivityLog(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteOneActivityLogArgs,
  ): Promise<ActivityLog | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).activityLog.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
