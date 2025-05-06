import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CategoryCreateManyUserInputEnvelope } from "../inputs/CategoryCreateManyUserInputEnvelope";
import { CategoryCreateOrConnectWithoutUserInput } from "../inputs/CategoryCreateOrConnectWithoutUserInput";
import { CategoryCreateWithoutUserInput } from "../inputs/CategoryCreateWithoutUserInput";
import { CategoryScalarWhereInput } from "../inputs/CategoryScalarWhereInput";
import { CategoryUpdateManyWithWhereWithoutUserInput } from "../inputs/CategoryUpdateManyWithWhereWithoutUserInput";
import { CategoryUpdateWithWhereUniqueWithoutUserInput } from "../inputs/CategoryUpdateWithWhereUniqueWithoutUserInput";
import { CategoryUpsertWithWhereUniqueWithoutUserInput } from "../inputs/CategoryUpsertWithWhereUniqueWithoutUserInput";
import { CategoryWhereUniqueInput } from "../inputs/CategoryWhereUniqueInput";

@TypeGraphQL.InputType("CategoryUpdateManyWithoutUserNestedInput", {})
export class CategoryUpdateManyWithoutUserNestedInput {
  @TypeGraphQL.Field((_type) => [CategoryCreateWithoutUserInput], {
    nullable: true,
  })
  create?: CategoryCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field((_type) => [CategoryCreateOrConnectWithoutUserInput], {
    nullable: true,
  })
  connectOrCreate?: CategoryCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(
    (_type) => [CategoryUpsertWithWhereUniqueWithoutUserInput],
    {
      nullable: true,
    },
  )
  upsert?: CategoryUpsertWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field((_type) => CategoryCreateManyUserInputEnvelope, {
    nullable: true,
  })
  createMany?: CategoryCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field((_type) => [CategoryWhereUniqueInput], {
    nullable: true,
  })
  set?: CategoryWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field((_type) => [CategoryWhereUniqueInput], {
    nullable: true,
  })
  disconnect?: CategoryWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field((_type) => [CategoryWhereUniqueInput], {
    nullable: true,
  })
  delete?: CategoryWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field((_type) => [CategoryWhereUniqueInput], {
    nullable: true,
  })
  connect?: CategoryWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(
    (_type) => [CategoryUpdateWithWhereUniqueWithoutUserInput],
    {
      nullable: true,
    },
  )
  update?: CategoryUpdateWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field((_type) => [CategoryUpdateManyWithWhereWithoutUserInput], {
    nullable: true,
  })
  updateMany?: CategoryUpdateManyWithWhereWithoutUserInput[] | undefined;

  @TypeGraphQL.Field((_type) => [CategoryScalarWhereInput], {
    nullable: true,
  })
  deleteMany?: CategoryScalarWhereInput[] | undefined;
}
