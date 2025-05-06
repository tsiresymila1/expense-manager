import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExpenseCreateManyUserInputEnvelope } from "../inputs/ExpenseCreateManyUserInputEnvelope";
import { ExpenseCreateOrConnectWithoutUserInput } from "../inputs/ExpenseCreateOrConnectWithoutUserInput";
import { ExpenseCreateWithoutUserInput } from "../inputs/ExpenseCreateWithoutUserInput";
import { ExpenseScalarWhereInput } from "../inputs/ExpenseScalarWhereInput";
import { ExpenseUpdateManyWithWhereWithoutUserInput } from "../inputs/ExpenseUpdateManyWithWhereWithoutUserInput";
import { ExpenseUpdateWithWhereUniqueWithoutUserInput } from "../inputs/ExpenseUpdateWithWhereUniqueWithoutUserInput";
import { ExpenseUpsertWithWhereUniqueWithoutUserInput } from "../inputs/ExpenseUpsertWithWhereUniqueWithoutUserInput";
import { ExpenseWhereUniqueInput } from "../inputs/ExpenseWhereUniqueInput";

@TypeGraphQL.InputType("ExpenseUpdateManyWithoutUserNestedInput", {})
export class ExpenseUpdateManyWithoutUserNestedInput {
  @TypeGraphQL.Field((_type) => [ExpenseCreateWithoutUserInput], {
    nullable: true,
  })
  create?: ExpenseCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field((_type) => [ExpenseCreateOrConnectWithoutUserInput], {
    nullable: true,
  })
  connectOrCreate?: ExpenseCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(
    (_type) => [ExpenseUpsertWithWhereUniqueWithoutUserInput],
    {
      nullable: true,
    },
  )
  upsert?: ExpenseUpsertWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field((_type) => ExpenseCreateManyUserInputEnvelope, {
    nullable: true,
  })
  createMany?: ExpenseCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field((_type) => [ExpenseWhereUniqueInput], {
    nullable: true,
  })
  set?: ExpenseWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field((_type) => [ExpenseWhereUniqueInput], {
    nullable: true,
  })
  disconnect?: ExpenseWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field((_type) => [ExpenseWhereUniqueInput], {
    nullable: true,
  })
  delete?: ExpenseWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field((_type) => [ExpenseWhereUniqueInput], {
    nullable: true,
  })
  connect?: ExpenseWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(
    (_type) => [ExpenseUpdateWithWhereUniqueWithoutUserInput],
    {
      nullable: true,
    },
  )
  update?: ExpenseUpdateWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field((_type) => [ExpenseUpdateManyWithWhereWithoutUserInput], {
    nullable: true,
  })
  updateMany?: ExpenseUpdateManyWithWhereWithoutUserInput[] | undefined;

  @TypeGraphQL.Field((_type) => [ExpenseScalarWhereInput], {
    nullable: true,
  })
  deleteMany?: ExpenseScalarWhereInput[] | undefined;
}
