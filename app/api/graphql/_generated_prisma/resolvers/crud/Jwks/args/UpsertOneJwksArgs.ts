import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { JwksCreateInput } from "../../../inputs/JwksCreateInput";
import { JwksUpdateInput } from "../../../inputs/JwksUpdateInput";
import { JwksWhereUniqueInput } from "../../../inputs/JwksWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneJwksArgs {
  @TypeGraphQL.Field((_type) => JwksWhereUniqueInput, {
    nullable: false,
  })
  where!: JwksWhereUniqueInput;

  @TypeGraphQL.Field((_type) => JwksCreateInput, {
    nullable: false,
  })
  create!: JwksCreateInput;

  @TypeGraphQL.Field((_type) => JwksUpdateInput, {
    nullable: false,
  })
  update!: JwksUpdateInput;
}
