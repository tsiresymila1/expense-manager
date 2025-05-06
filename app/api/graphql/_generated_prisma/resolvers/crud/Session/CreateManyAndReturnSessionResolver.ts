import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateManyAndReturnSessionArgs } from "./args/CreateManyAndReturnSessionArgs";
import { Session } from "../../../models/Session";
import { CreateManyAndReturnSession } from "../../outputs/CreateManyAndReturnSession";
import {
  transformInfoIntoPrismaArgs,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from "../../../helpers";

@TypeGraphQL.Resolver((_of) => Session)
export class CreateManyAndReturnSessionResolver {
  @TypeGraphQL.Mutation((_returns) => [CreateManyAndReturnSession], {
    nullable: false,
  })
  async createManyAndReturnSession(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateManyAndReturnSessionArgs,
  ): Promise<CreateManyAndReturnSession[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).session.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
