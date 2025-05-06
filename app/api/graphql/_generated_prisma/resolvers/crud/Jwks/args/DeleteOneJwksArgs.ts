import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { JwksWhereUniqueInput } from "../../../inputs/JwksWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOneJwksArgs {
  @TypeGraphQL.Field((_type) => JwksWhereUniqueInput, {
    nullable: false,
  })
  where!: JwksWhereUniqueInput;
}
