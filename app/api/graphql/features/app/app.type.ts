import { Field, Float, ObjectType } from "type-graphql";

@ObjectType()
class Total {
  @Field(() => Float)
  declare current: number;

  @Field(() => Float)
  declare previous: number;
}

@ObjectType()
class Average {
  @Field(() => Float)
  declare current: number;

  @Field(() => Float)
  declare previous: number;

  @Field(() => Float)
  declare percentageChange: number;
}

@ObjectType()
class HighestCategory {
  @Field(() => String)
  declare name: string;

  @Field(() => Float)
  @Field(() => String)
  declare percentage: number | string;

  @Field(() => Float)
  declare total: number;
}

@ObjectType()
class Recent {
  @Field(() => String, { nullable: true })
  declare name?: string;

  @Field(() => Float, { nullable: true })
  declare amount?: number;

  @Field(() => Date, { nullable: true })
  declare date?: Date;
}

@ObjectType()
class Trending {
  @Field(() => Float)
  declare current: number;

  @Field(() => Float)
  declare previous: number;

  @Field(() => Float)
  declare percent: number;
}

@ObjectType()
class CategoryStat {
  @Field(() => String)
  declare name: string;

  @Field(() => String)
  declare percentage: string;

  @Field(() => Float)
  declare totalAmount: number;
}

@ObjectType()
export class DashboardData {
  @Field(() => String)
  declare currency: string;

  @Field(() => Total)
  declare total: Total;

  @Field(() => Average)
  declare average: Average;

  @Field(() => HighestCategory)
  declare highestCategory: HighestCategory;

  @Field(() => Recent, { nullable: true })
  declare recent?: Recent;

  @Field(() => [CategoryStat])
  declare categoryStats: CategoryStat[];

  @Field(() => Trending)
  declare trending: Trending;
}
