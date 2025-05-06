import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExpenseCreateManyUserInput } from "../inputs/ExpenseCreateManyUserInput";

@TypeGraphQL.InputType("ExpenseCreateManyUserInputEnvelope", {})
export class ExpenseCreateManyUserInputEnvelope {
  @TypeGraphQL.Field((_type) => [ExpenseCreateManyUserInput], {
    nullable: false,
  })
  data!: ExpenseCreateManyUserInput[];

  @TypeGraphQL.Field((_type) => Boolean, {
    nullable: true,
  })
  skipDuplicates?: boolean | undefined;
}
