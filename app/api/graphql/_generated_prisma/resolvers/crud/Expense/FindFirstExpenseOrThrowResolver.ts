import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstExpenseOrThrowArgs } from "./args/FindFirstExpenseOrThrowArgs";
import { Expense } from "../../../models/Expense";
import {
  transformInfoIntoPrismaArgs,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from "../../../helpers";

@TypeGraphQL.Resolver((_of) => Expense)
export class FindFirstExpenseOrThrowResolver {
  @TypeGraphQL.Query((_returns) => Expense, {
    nullable: true,
  })
  async findFirstExpenseOrThrow(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindFirstExpenseOrThrowArgs,
  ): Promise<Expense | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).expense.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
