import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExpenseAvgAggregate } from "../outputs/ExpenseAvgAggregate";
import { ExpenseCountAggregate } from "../outputs/ExpenseCountAggregate";
import { ExpenseMaxAggregate } from "../outputs/ExpenseMaxAggregate";
import { ExpenseMinAggregate } from "../outputs/ExpenseMinAggregate";
import { ExpenseSumAggregate } from "../outputs/ExpenseSumAggregate";

@TypeGraphQL.ObjectType("AggregateExpense", {})
export class AggregateExpense {
  @TypeGraphQL.Field((_type) => ExpenseCountAggregate, {
    nullable: true,
  })
  _count!: ExpenseCountAggregate | null;

  @TypeGraphQL.Field((_type) => ExpenseAvgAggregate, {
    nullable: true,
  })
  _avg!: ExpenseAvgAggregate | null;

  @TypeGraphQL.Field((_type) => ExpenseSumAggregate, {
    nullable: true,
  })
  _sum!: ExpenseSumAggregate | null;

  @TypeGraphQL.Field((_type) => ExpenseMinAggregate, {
    nullable: true,
  })
  _min!: ExpenseMinAggregate | null;

  @TypeGraphQL.Field((_type) => ExpenseMaxAggregate, {
    nullable: true,
  })
  _max!: ExpenseMaxAggregate | null;
}
