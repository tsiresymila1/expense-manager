import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Account } from "../models/Account";
import { ActivityLog } from "../models/ActivityLog";
import { Category } from "../models/Category";
import { Expense } from "../models/Expense";
import { Session } from "../models/Session";
import { Setting } from "../models/Setting";
import { UserCount } from "../resolvers/outputs/UserCount";

@TypeGraphQL.ObjectType("User", {})
export class User {
  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  id!: string;

  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  email!: string;

  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  name?: string | null;

  @TypeGraphQL.Field((_type) => Boolean, {
    nullable: false,
  })
  emailVerified!: boolean;

  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  image?: string | null;

  @TypeGraphQL.Field((_type) => Date, {
    nullable: false,
  })
  createdAt!: Date;

  @TypeGraphQL.Field((_type) => Date, {
    nullable: false,
  })
  updatedAt!: Date;

  expenses?: Expense[];

  categories?: Category[];

  sessions?: Session[];

  accounts?: Account[];

  Setting?: Setting[];

  activityLogs?: ActivityLog[];

  @TypeGraphQL.Field((_type) => UserCount, {
    nullable: true,
  })
  _count?: UserCount | null;
}
