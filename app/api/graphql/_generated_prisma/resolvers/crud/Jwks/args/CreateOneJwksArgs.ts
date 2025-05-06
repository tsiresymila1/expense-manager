import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { JwksCreateInput } from "../../../inputs/JwksCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneJwksArgs {
  @TypeGraphQL.Field((_type) => JwksCreateInput, {
    nullable: false,
  })
  data!: JwksCreateInput;
}
