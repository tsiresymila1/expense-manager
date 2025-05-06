import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateManyAndReturnSettingArgs } from "./args/CreateManyAndReturnSettingArgs";
import { Setting } from "../../../models/Setting";
import { CreateManyAndReturnSetting } from "../../outputs/CreateManyAndReturnSetting";
import {
  transformInfoIntoPrismaArgs,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from "../../../helpers";

@TypeGraphQL.Resolver((_of) => Setting)
export class CreateManyAndReturnSettingResolver {
  @TypeGraphQL.Mutation((_returns) => [CreateManyAndReturnSetting], {
    nullable: false,
  })
  async createManyAndReturnSetting(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateManyAndReturnSettingArgs,
  ): Promise<CreateManyAndReturnSetting[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).setting.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
