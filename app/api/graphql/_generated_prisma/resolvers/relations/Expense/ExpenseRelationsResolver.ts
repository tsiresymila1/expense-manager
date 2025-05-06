import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { Category } from "../../../models/Category";
import { Expense } from "../../../models/Expense";
import { User } from "../../../models/User";
import {
  transformInfoIntoPrismaArgs,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from "../../../helpers";

@TypeGraphQL.Resolver((_of) => Expense)
export class ExpenseRelationsResolver {
  @TypeGraphQL.FieldResolver((_type) => User, {
    nullable: false,
  })
  async user(
    @TypeGraphQL.Root() expense: Expense,
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
  ): Promise<User> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx)
      .expense.findUniqueOrThrow({
        where: {
          id: expense.id,
        },
      })
      .user({
        ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
      });
  }

  @TypeGraphQL.FieldResolver((_type) => Category, {
    nullable: false,
  })
  async category(
    @TypeGraphQL.Root() expense: Expense,
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
  ): Promise<Category> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx)
      .expense.findUniqueOrThrow({
        where: {
          id: expense.id,
        },
      })
      .category({
        ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
      });
  }
}
