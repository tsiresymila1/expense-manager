import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AccountOrderByWithRelationInput } from "../../../inputs/AccountOrderByWithRelationInput";
import { AccountWhereInput } from "../../../inputs/AccountWhereInput";
import { AccountWhereUniqueInput } from "../../../inputs/AccountWhereUniqueInput";
import { AccountScalarFieldEnum } from "../../../../enums/AccountScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManyAccountArgs {
  @TypeGraphQL.Field((_type) => AccountWhereInput, {
    nullable: true,
  })
  where?: AccountWhereInput | undefined;

  @TypeGraphQL.Field((_type) => [AccountOrderByWithRelationInput], {
    nullable: true,
  })
  orderBy?: AccountOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field((_type) => AccountWhereUniqueInput, {
    nullable: true,
  })
  cursor?: AccountWhereUniqueInput | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  take?: number | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  skip?: number | undefined;

  @TypeGraphQL.Field((_type) => [AccountScalarFieldEnum], {
    nullable: true,
  })
  distinct?:
    | Array<
        | "id"
        | "accountId"
        | "providerId"
        | "userId"
        | "accessToken"
        | "refreshToken"
        | "idToken"
        | "accessTokenExpiresAt"
        | "refreshTokenExpiresAt"
        | "scope"
        | "password"
        | "createdAt"
        | "updatedAt"
      >
    | undefined;
}
