import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ActivityLogCountOrderByAggregateInput } from "../inputs/ActivityLogCountOrderByAggregateInput";
import { ActivityLogMaxOrderByAggregateInput } from "../inputs/ActivityLogMaxOrderByAggregateInput";
import { ActivityLogMinOrderByAggregateInput } from "../inputs/ActivityLogMinOrderByAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("ActivityLogOrderByWithAggregationInput", {})
export class ActivityLogOrderByWithAggregationInput {
  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  action?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrderInput, {
    nullable: true,
  })
  description?: SortOrderInput | undefined;

  @TypeGraphQL.Field((_type) => SortOrderInput, {
    nullable: true,
  })
  ipAddress?: SortOrderInput | undefined;

  @TypeGraphQL.Field((_type) => SortOrderInput, {
    nullable: true,
  })
  userAgent?: SortOrderInput | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  createdAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  userId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => ActivityLogCountOrderByAggregateInput, {
    nullable: true,
  })
  _count?: ActivityLogCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field((_type) => ActivityLogMaxOrderByAggregateInput, {
    nullable: true,
  })
  _max?: ActivityLogMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field((_type) => ActivityLogMinOrderByAggregateInput, {
    nullable: true,
  })
  _min?: ActivityLogMinOrderByAggregateInput | undefined;
}
