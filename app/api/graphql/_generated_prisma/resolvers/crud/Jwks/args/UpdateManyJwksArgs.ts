import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { JwksUpdateManyMutationInput } from "../../../inputs/JwksUpdateManyMutationInput";
import { JwksWhereInput } from "../../../inputs/JwksWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyJwksArgs {
  @TypeGraphQL.Field((_type) => JwksUpdateManyMutationInput, {
    nullable: false,
  })
  data!: JwksUpdateManyMutationInput;

  @TypeGraphQL.Field((_type) => JwksWhereInput, {
    nullable: true,
  })
  where?: JwksWhereInput | undefined;
}
