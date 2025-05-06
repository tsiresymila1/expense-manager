import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateExpenseArgs } from "./args/AggregateExpenseArgs";
import { Expense } from "../../../models/Expense";
import { AggregateExpense } from "../../outputs/AggregateExpense";
import {
  transformInfoIntoPrismaArgs,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from "../../../helpers";

@TypeGraphQL.Resolver((_of) => Expense)
export class AggregateExpenseResolver {
  @TypeGraphQL.Query((_returns) => AggregateExpense, {
    nullable: false,
  })
  async aggregateExpense(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: AggregateExpenseArgs,
  ): Promise<AggregateExpense> {
    return getPrismaFromContext(ctx).expense.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
