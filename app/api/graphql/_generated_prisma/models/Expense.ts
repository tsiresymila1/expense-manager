import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Category } from "../models/Category";
import { User } from "../models/User";

@TypeGraphQL.ObjectType("Expense", {})
export class Expense {
  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  id!: string;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Float, {
    nullable: false,
  })
  amount!: number;

  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  description!: string;

  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  notes?: string | null;

  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  payment!: string;

  @TypeGraphQL.Field((_type) => Date, {
    nullable: false,
  })
  date!: Date;

  @TypeGraphQL.Field((_type) => Date, {
    nullable: false,
  })
  createdAt!: Date;

  @TypeGraphQL.Field((_type) => Date, {
    nullable: false,
  })
  updatedAt!: Date;

  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  userId!: string;

  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  categoryId!: string;

  user?: User;

  category?: Category;
}
