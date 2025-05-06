import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CategoryCreateManyUserInput } from "../inputs/CategoryCreateManyUserInput";

@TypeGraphQL.InputType("CategoryCreateManyUserInputEnvelope", {})
export class CategoryCreateManyUserInputEnvelope {
  @TypeGraphQL.Field((_type) => [CategoryCreateManyUserInput], {
    nullable: false,
  })
  data!: CategoryCreateManyUserInput[];

  @TypeGraphQL.Field((_type) => Boolean, {
    nullable: true,
  })
  skipDuplicates?: boolean | undefined;
}
