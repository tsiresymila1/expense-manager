import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExpenseCreateManyCategoryInputEnvelope } from "../inputs/ExpenseCreateManyCategoryInputEnvelope";
import { ExpenseCreateOrConnectWithoutCategoryInput } from "../inputs/ExpenseCreateOrConnectWithoutCategoryInput";
import { ExpenseCreateWithoutCategoryInput } from "../inputs/ExpenseCreateWithoutCategoryInput";
import { ExpenseWhereUniqueInput } from "../inputs/ExpenseWhereUniqueInput";

@TypeGraphQL.InputType("ExpenseCreateNestedManyWithoutCategoryInput", {})
export class ExpenseCreateNestedManyWithoutCategoryInput {
  @TypeGraphQL.Field((_type) => [ExpenseCreateWithoutCategoryInput], {
    nullable: true,
  })
  create?: ExpenseCreateWithoutCategoryInput[] | undefined;

  @TypeGraphQL.Field((_type) => [ExpenseCreateOrConnectWithoutCategoryInput], {
    nullable: true,
  })
  connectOrCreate?: ExpenseCreateOrConnectWithoutCategoryInput[] | undefined;

  @TypeGraphQL.Field((_type) => ExpenseCreateManyCategoryInputEnvelope, {
    nullable: true,
  })
  createMany?: ExpenseCreateManyCategoryInputEnvelope | undefined;

  @TypeGraphQL.Field((_type) => [ExpenseWhereUniqueInput], {
    nullable: true,
  })
  connect?: ExpenseWhereUniqueInput[] | undefined;
}
