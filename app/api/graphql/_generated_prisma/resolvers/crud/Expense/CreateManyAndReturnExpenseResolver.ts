import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateManyAndReturnExpenseArgs } from "./args/CreateManyAndReturnExpenseArgs";
import { Expense } from "../../../models/Expense";
import { CreateManyAndReturnExpense } from "../../outputs/CreateManyAndReturnExpense";
import {
  transformInfoIntoPrismaArgs,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from "../../../helpers";

@TypeGraphQL.Resolver((_of) => Expense)
export class CreateManyAndReturnExpenseResolver {
  @TypeGraphQL.Mutation((_returns) => [CreateManyAndReturnExpense], {
    nullable: false,
  })
  async createManyAndReturnExpense(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateManyAndReturnExpenseArgs,
  ): Promise<CreateManyAndReturnExpense[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).expense.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
