import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateManyAndReturnActivityLogArgs } from "./args/CreateManyAndReturnActivityLogArgs";
import { ActivityLog } from "../../../models/ActivityLog";
import { CreateManyAndReturnActivityLog } from "../../outputs/CreateManyAndReturnActivityLog";
import {
  transformInfoIntoPrismaArgs,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from "../../../helpers";

@TypeGraphQL.Resolver((_of) => ActivityLog)
export class CreateManyAndReturnActivityLogResolver {
  @TypeGraphQL.Mutation((_returns) => [CreateManyAndReturnActivityLog], {
    nullable: false,
  })
  async createManyAndReturnActivityLog(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateManyAndReturnActivityLogArgs,
  ): Promise<CreateManyAndReturnActivityLog[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).activityLog.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
