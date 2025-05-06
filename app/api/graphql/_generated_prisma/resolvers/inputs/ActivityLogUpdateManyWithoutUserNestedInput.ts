import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ActivityLogCreateManyUserInputEnvelope } from "../inputs/ActivityLogCreateManyUserInputEnvelope";
import { ActivityLogCreateOrConnectWithoutUserInput } from "../inputs/ActivityLogCreateOrConnectWithoutUserInput";
import { ActivityLogCreateWithoutUserInput } from "../inputs/ActivityLogCreateWithoutUserInput";
import { ActivityLogScalarWhereInput } from "../inputs/ActivityLogScalarWhereInput";
import { ActivityLogUpdateManyWithWhereWithoutUserInput } from "../inputs/ActivityLogUpdateManyWithWhereWithoutUserInput";
import { ActivityLogUpdateWithWhereUniqueWithoutUserInput } from "../inputs/ActivityLogUpdateWithWhereUniqueWithoutUserInput";
import { ActivityLogUpsertWithWhereUniqueWithoutUserInput } from "../inputs/ActivityLogUpsertWithWhereUniqueWithoutUserInput";
import { ActivityLogWhereUniqueInput } from "../inputs/ActivityLogWhereUniqueInput";

@TypeGraphQL.InputType("ActivityLogUpdateManyWithoutUserNestedInput", {})
export class ActivityLogUpdateManyWithoutUserNestedInput {
  @TypeGraphQL.Field((_type) => [ActivityLogCreateWithoutUserInput], {
    nullable: true,
  })
  create?: ActivityLogCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field((_type) => [ActivityLogCreateOrConnectWithoutUserInput], {
    nullable: true,
  })
  connectOrCreate?: ActivityLogCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(
    (_type) => [ActivityLogUpsertWithWhereUniqueWithoutUserInput],
    {
      nullable: true,
    },
  )
  upsert?: ActivityLogUpsertWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field((_type) => ActivityLogCreateManyUserInputEnvelope, {
    nullable: true,
  })
  createMany?: ActivityLogCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field((_type) => [ActivityLogWhereUniqueInput], {
    nullable: true,
  })
  set?: ActivityLogWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field((_type) => [ActivityLogWhereUniqueInput], {
    nullable: true,
  })
  disconnect?: ActivityLogWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field((_type) => [ActivityLogWhereUniqueInput], {
    nullable: true,
  })
  delete?: ActivityLogWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field((_type) => [ActivityLogWhereUniqueInput], {
    nullable: true,
  })
  connect?: ActivityLogWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(
    (_type) => [ActivityLogUpdateWithWhereUniqueWithoutUserInput],
    {
      nullable: true,
    },
  )
  update?: ActivityLogUpdateWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(
    (_type) => [ActivityLogUpdateManyWithWhereWithoutUserInput],
    {
      nullable: true,
    },
  )
  updateMany?: ActivityLogUpdateManyWithWhereWithoutUserInput[] | undefined;

  @TypeGraphQL.Field((_type) => [ActivityLogScalarWhereInput], {
    nullable: true,
  })
  deleteMany?: ActivityLogScalarWhereInput[] | undefined;
}
