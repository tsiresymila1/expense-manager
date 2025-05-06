import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CategoryUpdateWithoutUserInput } from "../inputs/CategoryUpdateWithoutUserInput";
import { CategoryWhereUniqueInput } from "../inputs/CategoryWhereUniqueInput";

@TypeGraphQL.InputType("CategoryUpdateWithWhereUniqueWithoutUserInput", {})
export class CategoryUpdateWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field((_type) => CategoryWhereUniqueInput, {
    nullable: false,
  })
  where!: CategoryWhereUniqueInput;

  @TypeGraphQL.Field((_type) => CategoryUpdateWithoutUserInput, {
    nullable: false,
  })
  data!: CategoryUpdateWithoutUserInput;
}
