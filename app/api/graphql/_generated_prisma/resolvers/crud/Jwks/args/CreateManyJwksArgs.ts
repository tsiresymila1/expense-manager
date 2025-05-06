import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { JwksCreateManyInput } from "../../../inputs/JwksCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyJwksArgs {
  @TypeGraphQL.Field((_type) => [JwksCreateManyInput], {
    nullable: false,
  })
  data!: JwksCreateManyInput[];

  @TypeGraphQL.Field((_type) => Boolean, {
    nullable: true,
  })
  skipDuplicates?: boolean | undefined;
}
