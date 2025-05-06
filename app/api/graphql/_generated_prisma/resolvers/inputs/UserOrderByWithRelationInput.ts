import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { AccountOrderByRelationAggregateInput } from "../inputs/AccountOrderByRelationAggregateInput";
import { ActivityLogOrderByRelationAggregateInput } from "../inputs/ActivityLogOrderByRelationAggregateInput";
import { CategoryOrderByRelationAggregateInput } from "../inputs/CategoryOrderByRelationAggregateInput";
import { ExpenseOrderByRelationAggregateInput } from "../inputs/ExpenseOrderByRelationAggregateInput";
import { SessionOrderByRelationAggregateInput } from "../inputs/SessionOrderByRelationAggregateInput";
import { SettingOrderByRelationAggregateInput } from "../inputs/SettingOrderByRelationAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("UserOrderByWithRelationInput", {})
export class UserOrderByWithRelationInput {
  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  email?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrderInput, {
    nullable: true,
  })
  name?: SortOrderInput | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  emailVerified?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrderInput, {
    nullable: true,
  })
  image?: SortOrderInput | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  createdAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  updatedAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field((_type) => ExpenseOrderByRelationAggregateInput, {
    nullable: true,
  })
  expenses?: ExpenseOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field((_type) => CategoryOrderByRelationAggregateInput, {
    nullable: true,
  })
  categories?: CategoryOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field((_type) => SessionOrderByRelationAggregateInput, {
    nullable: true,
  })
  sessions?: SessionOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field((_type) => AccountOrderByRelationAggregateInput, {
    nullable: true,
  })
  accounts?: AccountOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field((_type) => SettingOrderByRelationAggregateInput, {
    nullable: true,
  })
  Setting?: SettingOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field((_type) => ActivityLogOrderByRelationAggregateInput, {
    nullable: true,
  })
  activityLogs?: ActivityLogOrderByRelationAggregateInput | undefined;
}
