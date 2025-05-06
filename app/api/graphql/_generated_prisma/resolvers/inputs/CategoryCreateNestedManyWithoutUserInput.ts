import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CategoryCreateManyUserInputEnvelope } from "../inputs/CategoryCreateManyUserInputEnvelope";
import { CategoryCreateOrConnectWithoutUserInput } from "../inputs/CategoryCreateOrConnectWithoutUserInput";
import { CategoryCreateWithoutUserInput } from "../inputs/CategoryCreateWithoutUserInput";
import { CategoryWhereUniqueInput } from "../inputs/CategoryWhereUniqueInput";

@TypeGraphQL.InputType("CategoryCreateNestedManyWithoutUserInput", {})
export class CategoryCreateNestedManyWithoutUserInput {
  @TypeGraphQL.Field((_type) => [CategoryCreateWithoutUserInput], {
    nullable: true,
  })
  create?: CategoryCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field((_type) => [CategoryCreateOrConnectWithoutUserInput], {
    nullable: true,
  })
  connectOrCreate?: CategoryCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field((_type) => CategoryCreateManyUserInputEnvelope, {
    nullable: true,
  })
  createMany?: CategoryCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field((_type) => [CategoryWhereUniqueInput], {
    nullable: true,
  })
  connect?: CategoryWhereUniqueInput[] | undefined;
}
