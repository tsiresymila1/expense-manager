import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ExpenseCreateManyInput } from "../../../inputs/ExpenseCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyExpenseArgs {
  @TypeGraphQL.Field((_type) => [ExpenseCreateManyInput], {
    nullable: false,
  })
  data!: ExpenseCreateManyInput[];

  @TypeGraphQL.Field((_type) => Boolean, {
    nullable: true,
  })
  skipDuplicates?: boolean | undefined;
}
