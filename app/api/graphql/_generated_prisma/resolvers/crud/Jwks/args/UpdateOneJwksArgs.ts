import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { JwksUpdateInput } from "../../../inputs/JwksUpdateInput";
import { JwksWhereUniqueInput } from "../../../inputs/JwksWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneJwksArgs {
  @TypeGraphQL.Field((_type) => JwksUpdateInput, {
    nullable: false,
  })
  data!: JwksUpdateInput;

  @TypeGraphQL.Field((_type) => JwksWhereUniqueInput, {
    nullable: false,
  })
  where!: JwksWhereUniqueInput;
}
