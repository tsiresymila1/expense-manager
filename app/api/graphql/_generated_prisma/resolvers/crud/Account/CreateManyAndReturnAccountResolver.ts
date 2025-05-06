import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateManyAndReturnAccountArgs } from "./args/CreateManyAndReturnAccountArgs";
import { Account } from "../../../models/Account";
import { CreateManyAndReturnAccount } from "../../outputs/CreateManyAndReturnAccount";
import {
  transformInfoIntoPrismaArgs,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from "../../../helpers";

@TypeGraphQL.Resolver((_of) => Account)
export class CreateManyAndReturnAccountResolver {
  @TypeGraphQL.Mutation((_returns) => [CreateManyAndReturnAccount], {
    nullable: false,
  })
  async createManyAndReturnAccount(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateManyAndReturnAccountArgs,
  ): Promise<CreateManyAndReturnAccount[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).account.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
