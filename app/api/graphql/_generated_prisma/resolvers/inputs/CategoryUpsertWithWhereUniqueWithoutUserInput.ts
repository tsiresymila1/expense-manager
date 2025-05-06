import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CategoryCreateWithoutUserInput } from "../inputs/CategoryCreateWithoutUserInput";
import { CategoryUpdateWithoutUserInput } from "../inputs/CategoryUpdateWithoutUserInput";
import { CategoryWhereUniqueInput } from "../inputs/CategoryWhereUniqueInput";

@TypeGraphQL.InputType("CategoryUpsertWithWhereUniqueWithoutUserInput", {})
export class CategoryUpsertWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field((_type) => CategoryWhereUniqueInput, {
    nullable: false,
  })
  where!: CategoryWhereUniqueInput;

  @TypeGraphQL.Field((_type) => CategoryUpdateWithoutUserInput, {
    nullable: false,
  })
  update!: CategoryUpdateWithoutUserInput;

  @TypeGraphQL.Field((_type) => CategoryCreateWithoutUserInput, {
    nullable: false,
  })
  create!: CategoryCreateWithoutUserInput;
}
