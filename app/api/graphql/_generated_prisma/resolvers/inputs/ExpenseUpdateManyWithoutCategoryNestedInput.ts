import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExpenseCreateManyCategoryInputEnvelope } from "../inputs/ExpenseCreateManyCategoryInputEnvelope";
import { ExpenseCreateOrConnectWithoutCategoryInput } from "../inputs/ExpenseCreateOrConnectWithoutCategoryInput";
import { ExpenseCreateWithoutCategoryInput } from "../inputs/ExpenseCreateWithoutCategoryInput";
import { ExpenseScalarWhereInput } from "../inputs/ExpenseScalarWhereInput";
import { ExpenseUpdateManyWithWhereWithoutCategoryInput } from "../inputs/ExpenseUpdateManyWithWhereWithoutCategoryInput";
import { ExpenseUpdateWithWhereUniqueWithoutCategoryInput } from "../inputs/ExpenseUpdateWithWhereUniqueWithoutCategoryInput";
import { ExpenseUpsertWithWhereUniqueWithoutCategoryInput } from "../inputs/ExpenseUpsertWithWhereUniqueWithoutCategoryInput";
import { ExpenseWhereUniqueInput } from "../inputs/ExpenseWhereUniqueInput";

@TypeGraphQL.InputType("ExpenseUpdateManyWithoutCategoryNestedInput", {})
export class ExpenseUpdateManyWithoutCategoryNestedInput {
  @TypeGraphQL.Field((_type) => [ExpenseCreateWithoutCategoryInput], {
    nullable: true,
  })
  create?: ExpenseCreateWithoutCategoryInput[] | undefined;

  @TypeGraphQL.Field((_type) => [ExpenseCreateOrConnectWithoutCategoryInput], {
    nullable: true,
  })
  connectOrCreate?: ExpenseCreateOrConnectWithoutCategoryInput[] | undefined;

  @TypeGraphQL.Field(
    (_type) => [ExpenseUpsertWithWhereUniqueWithoutCategoryInput],
    {
      nullable: true,
    },
  )
  upsert?: ExpenseUpsertWithWhereUniqueWithoutCategoryInput[] | undefined;

  @TypeGraphQL.Field((_type) => ExpenseCreateManyCategoryInputEnvelope, {
    nullable: true,
  })
  createMany?: ExpenseCreateManyCategoryInputEnvelope | undefined;

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
    (_type) => [ExpenseUpdateWithWhereUniqueWithoutCategoryInput],
    {
      nullable: true,
    },
  )
  update?: ExpenseUpdateWithWhereUniqueWithoutCategoryInput[] | undefined;

  @TypeGraphQL.Field(
    (_type) => [ExpenseUpdateManyWithWhereWithoutCategoryInput],
    {
      nullable: true,
    },
  )
  updateMany?: ExpenseUpdateManyWithWhereWithoutCategoryInput[] | undefined;

  @TypeGraphQL.Field((_type) => [ExpenseScalarWhereInput], {
    nullable: true,
  })
  deleteMany?: ExpenseScalarWhereInput[] | undefined;
}
