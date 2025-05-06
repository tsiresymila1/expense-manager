import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { JwksWhereInput } from "../../../inputs/JwksWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyJwksArgs {
  @TypeGraphQL.Field((_type) => JwksWhereInput, {
    nullable: true,
  })
  where?: JwksWhereInput | undefined;
}
