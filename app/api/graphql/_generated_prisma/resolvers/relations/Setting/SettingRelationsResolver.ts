import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { Setting } from "../../../models/Setting";
import { User } from "../../../models/User";
import {
  transformInfoIntoPrismaArgs,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from "../../../helpers";

@TypeGraphQL.Resolver((_of) => Setting)
export class SettingRelationsResolver {
  @TypeGraphQL.FieldResolver((_type) => User, {
    nullable: false,
  })
  async user(
    @TypeGraphQL.Root() setting: Setting,
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
  ): Promise<User> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx)
      .setting.findUniqueOrThrow({
        where: {
          id: setting.id,
        },
      })
      .user({
        ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
      });
  }
}
