import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { JwksOrderByWithRelationInput } from "../../../inputs/JwksOrderByWithRelationInput";
import { JwksWhereInput } from "../../../inputs/JwksWhereInput";
import { JwksWhereUniqueInput } from "../../../inputs/JwksWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateJwksArgs {
  @TypeGraphQL.Field((_type) => JwksWhereInput, {
    nullable: true,
  })
  where?: JwksWhereInput | undefined;

  @TypeGraphQL.Field((_type) => [JwksOrderByWithRelationInput], {
    nullable: true,
  })
  orderBy?: JwksOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field((_type) => JwksWhereUniqueInput, {
    nullable: true,
  })
  cursor?: JwksWhereUniqueInput | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  take?: number | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  skip?: number | undefined;
}
