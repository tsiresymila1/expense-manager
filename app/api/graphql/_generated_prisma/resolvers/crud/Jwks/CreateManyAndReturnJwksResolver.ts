import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateManyAndReturnJwksArgs } from "./args/CreateManyAndReturnJwksArgs";
import { Jwks } from "../../../models/Jwks";
import { CreateManyAndReturnJwks } from "../../outputs/CreateManyAndReturnJwks";
import {
  transformInfoIntoPrismaArgs,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from "../../../helpers";

@TypeGraphQL.Resolver((_of) => Jwks)
export class CreateManyAndReturnJwksResolver {
  @TypeGraphQL.Mutation((_returns) => [CreateManyAndReturnJwks], {
    nullable: false,
  })
  async createManyAndReturnJwks(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateManyAndReturnJwksArgs,
  ): Promise<CreateManyAndReturnJwks[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).jwks.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
