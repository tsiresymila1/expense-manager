import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CategoryUpdateWithoutExpensesInput } from "../inputs/CategoryUpdateWithoutExpensesInput";
import { CategoryWhereInput } from "../inputs/CategoryWhereInput";

@TypeGraphQL.InputType("CategoryUpdateToOneWithWhereWithoutExpensesInput", {})
export class CategoryUpdateToOneWithWhereWithoutExpensesInput {
  @TypeGraphQL.Field((_type) => CategoryWhereInput, {
    nullable: true,
  })
  where?: CategoryWhereInput | undefined;

  @TypeGraphQL.Field((_type) => CategoryUpdateWithoutExpensesInput, {
    nullable: false,
  })
  data!: CategoryUpdateWithoutExpensesInput;
}
