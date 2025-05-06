import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { JwksOrderByWithAggregationInput } from "../../../inputs/JwksOrderByWithAggregationInput";
import { JwksScalarWhereWithAggregatesInput } from "../../../inputs/JwksScalarWhereWithAggregatesInput";
import { JwksWhereInput } from "../../../inputs/JwksWhereInput";
import { JwksScalarFieldEnum } from "../../../../enums/JwksScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByJwksArgs {
  @TypeGraphQL.Field((_type) => JwksWhereInput, {
    nullable: true,
  })
  where?: JwksWhereInput | undefined;

  @TypeGraphQL.Field((_type) => [JwksOrderByWithAggregationInput], {
    nullable: true,
  })
  orderBy?: JwksOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field((_type) => [JwksScalarFieldEnum], {
    nullable: false,
  })
  by!: Array<"id" | "publicKey" | "privateKey" | "createdAt">;

  @TypeGraphQL.Field((_type) => JwksScalarWhereWithAggregatesInput, {
    nullable: true,
  })
  having?: JwksScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  take?: number | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  skip?: number | undefined;
}
