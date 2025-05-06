import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CategoryCreateOrConnectWithoutExpensesInput } from "../inputs/CategoryCreateOrConnectWithoutExpensesInput";
import { CategoryCreateWithoutExpensesInput } from "../inputs/CategoryCreateWithoutExpensesInput";
import { CategoryUpdateToOneWithWhereWithoutExpensesInput } from "../inputs/CategoryUpdateToOneWithWhereWithoutExpensesInput";
import { CategoryUpsertWithoutExpensesInput } from "../inputs/CategoryUpsertWithoutExpensesInput";
import { CategoryWhereUniqueInput } from "../inputs/CategoryWhereUniqueInput";

@TypeGraphQL.InputType(
  "CategoryUpdateOneRequiredWithoutExpensesNestedInput",
  {},
)
export class CategoryUpdateOneRequiredWithoutExpensesNestedInput {
  @TypeGraphQL.Field((_type) => CategoryCreateWithoutExpensesInput, {
    nullable: true,
  })
  create?: CategoryCreateWithoutExpensesInput | undefined;

  @TypeGraphQL.Field((_type) => CategoryCreateOrConnectWithoutExpensesInput, {
    nullable: true,
  })
  connectOrCreate?: CategoryCreateOrConnectWithoutExpensesInput | undefined;

  @TypeGraphQL.Field((_type) => CategoryUpsertWithoutExpensesInput, {
    nullable: true,
  })
  upsert?: CategoryUpsertWithoutExpensesInput | undefined;

  @TypeGraphQL.Field((_type) => CategoryWhereUniqueInput, {
    nullable: true,
  })
  connect?: CategoryWhereUniqueInput | undefined;

  @TypeGraphQL.Field(
    (_type) => CategoryUpdateToOneWithWhereWithoutExpensesInput,
    {
      nullable: true,
    },
  )
  update?: CategoryUpdateToOneWithWhereWithoutExpensesInput | undefined;
}
