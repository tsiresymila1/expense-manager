import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { JwksCountOrderByAggregateInput } from "../inputs/JwksCountOrderByAggregateInput";
import { JwksMaxOrderByAggregateInput } from "../inputs/JwksMaxOrderByAggregateInput";
import { JwksMinOrderByAggregateInput } from "../inputs/JwksMinOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("JwksOrderByWithAggregationInput", {})
export class JwksOrderByWithAggregationInput {
  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  publicKey?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  privateKey?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  createdAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => JwksCountOrderByAggregateInput, {
    nullable: true,
  })
  _count?: JwksCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field((_type) => JwksMaxOrderByAggregateInput, {
    nullable: true,
  })
  _max?: JwksMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field((_type) => JwksMinOrderByAggregateInput, {
    nullable: true,
  })
  _min?: JwksMinOrderByAggregateInput | undefined;
}
