import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AccountWhereUniqueInput } from "../../../inputs/AccountWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOneAccountArgs {
  @TypeGraphQL.Field((_type) => AccountWhereUniqueInput, {
    nullable: false,
  })
  where!: AccountWhereUniqueInput;
}
