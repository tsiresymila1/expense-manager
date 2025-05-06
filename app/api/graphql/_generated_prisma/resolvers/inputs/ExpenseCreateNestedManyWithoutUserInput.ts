import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExpenseCreateManyUserInputEnvelope } from "../inputs/ExpenseCreateManyUserInputEnvelope";
import { ExpenseCreateOrConnectWithoutUserInput } from "../inputs/ExpenseCreateOrConnectWithoutUserInput";
import { ExpenseCreateWithoutUserInput } from "../inputs/ExpenseCreateWithoutUserInput";
import { ExpenseWhereUniqueInput } from "../inputs/ExpenseWhereUniqueInput";

@TypeGraphQL.InputType("ExpenseCreateNestedManyWithoutUserInput", {})
export class ExpenseCreateNestedManyWithoutUserInput {
  @TypeGraphQL.Field((_type) => [ExpenseCreateWithoutUserInput], {
    nullable: true,
  })
  create?: ExpenseCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field((_type) => [ExpenseCreateOrConnectWithoutUserInput], {
    nullable: true,
  })
  connectOrCreate?: ExpenseCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field((_type) => ExpenseCreateManyUserInputEnvelope, {
    nullable: true,
  })
  createMany?: ExpenseCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field((_type) => [ExpenseWhereUniqueInput], {
    nullable: true,
  })
  connect?: ExpenseWhereUniqueInput[] | undefined;
}
