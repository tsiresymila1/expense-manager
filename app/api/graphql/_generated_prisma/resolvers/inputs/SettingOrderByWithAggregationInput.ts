import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SettingCountOrderByAggregateInput } from "../inputs/SettingCountOrderByAggregateInput";
import { SettingMaxOrderByAggregateInput } from "../inputs/SettingMaxOrderByAggregateInput";
import { SettingMinOrderByAggregateInput } from "../inputs/SettingMinOrderByAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("SettingOrderByWithAggregationInput", {})
export class SettingOrderByWithAggregationInput {
  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  key?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrderInput, {
    nullable: true,
  })
  value?: SortOrderInput | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  userId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SettingCountOrderByAggregateInput, {
    nullable: true,
  })
  _count?: SettingCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field((_type) => SettingMaxOrderByAggregateInput, {
    nullable: true,
  })
  _max?: SettingMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field((_type) => SettingMinOrderByAggregateInput, {
    nullable: true,
  })
  _min?: SettingMinOrderByAggregateInput | undefined;
}
