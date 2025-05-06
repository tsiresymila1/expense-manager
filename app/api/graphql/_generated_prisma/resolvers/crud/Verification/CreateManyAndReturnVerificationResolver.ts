import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateManyAndReturnVerificationArgs } from "./args/CreateManyAndReturnVerificationArgs";
import { Verification } from "../../../models/Verification";
import { CreateManyAndReturnVerification } from "../../outputs/CreateManyAndReturnVerification";
import {
  transformInfoIntoPrismaArgs,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from "../../../helpers";

@TypeGraphQL.Resolver((_of) => Verification)
export class CreateManyAndReturnVerificationResolver {
  @TypeGraphQL.Mutation((_returns) => [CreateManyAndReturnVerification], {
    nullable: false,
  })
  async createManyAndReturnVerification(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateManyAndReturnVerificationArgs,
  ): Promise<CreateManyAndReturnVerification[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).verification.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
