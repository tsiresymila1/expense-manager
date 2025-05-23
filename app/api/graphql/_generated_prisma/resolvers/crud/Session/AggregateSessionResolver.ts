import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateSessionArgs } from "./args/AggregateSessionArgs";
import { Session } from "../../../models/Session";
import { AggregateSession } from "../../outputs/AggregateSession";
import {
  transformInfoIntoPrismaArgs,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from "../../../helpers";

@TypeGraphQL.Resolver((_of) => Session)
export class AggregateSessionResolver {
  @TypeGraphQL.Query((_returns) => AggregateSession, {
    nullable: false,
  })
  async aggregateSession(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: AggregateSessionArgs,
  ): Promise<AggregateSession> {
    return getPrismaFromContext(ctx).session.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
