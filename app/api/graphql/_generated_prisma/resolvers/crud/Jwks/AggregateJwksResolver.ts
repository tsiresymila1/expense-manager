import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateJwksArgs } from "./args/AggregateJwksArgs";
import { Jwks } from "../../../models/Jwks";
import { AggregateJwks } from "../../outputs/AggregateJwks";
import {
  transformInfoIntoPrismaArgs,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from "../../../helpers";

@TypeGraphQL.Resolver((_of) => Jwks)
export class AggregateJwksResolver {
  @TypeGraphQL.Query((_returns) => AggregateJwks, {
    nullable: false,
  })
  async aggregateJwks(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: AggregateJwksArgs,
  ): Promise<AggregateJwks> {
    return getPrismaFromContext(ctx).jwks.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
