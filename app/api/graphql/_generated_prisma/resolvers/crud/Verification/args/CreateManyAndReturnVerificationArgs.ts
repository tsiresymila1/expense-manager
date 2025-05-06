import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { VerificationCreateManyInput } from "../../../inputs/VerificationCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyAndReturnVerificationArgs {
  @TypeGraphQL.Field((_type) => [VerificationCreateManyInput], {
    nullable: false,
  })
  data!: VerificationCreateManyInput[];

  @TypeGraphQL.Field((_type) => Boolean, {
    nullable: true,
  })
  skipDuplicates?: boolean | undefined;
}
