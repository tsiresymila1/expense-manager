import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ActivityLogOrderByWithRelationInput } from "../../../inputs/ActivityLogOrderByWithRelationInput";
import { ActivityLogWhereInput } from "../../../inputs/ActivityLogWhereInput";
import { ActivityLogWhereUniqueInput } from "../../../inputs/ActivityLogWhereUniqueInput";
import { ActivityLogScalarFieldEnum } from "../../../../enums/ActivityLogScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class UserActivityLogsArgs {
  @TypeGraphQL.Field((_type) => ActivityLogWhereInput, {
    nullable: true,
  })
  where?: ActivityLogWhereInput | undefined;

  @TypeGraphQL.Field((_type) => [ActivityLogOrderByWithRelationInput], {
    nullable: true,
  })
  orderBy?: ActivityLogOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field((_type) => ActivityLogWhereUniqueInput, {
    nullable: true,
  })
  cursor?: ActivityLogWhereUniqueInput | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  take?: number | undefined;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  skip?: number | undefined;

  @TypeGraphQL.Field((_type) => [ActivityLogScalarFieldEnum], {
    nullable: true,
  })
  distinct?:
    | Array<
        | "id"
        | "action"
        | "description"
        | "ipAddress"
        | "userAgent"
        | "createdAt"
        | "userId"
      >
    | undefined;
}
