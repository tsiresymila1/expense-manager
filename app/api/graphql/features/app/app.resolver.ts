import { getMountAverage } from "@/app/dashboard/components/dash/expense-month-average";
import { getCurrentMonthExpensesTranding } from "@/app/dashboard/components/dash/expense-month-trending";
import { getCategoryStats } from "@/app/dashboard/components/dash/expense-per-category";
import { getHighestCategory } from "@/app/dashboard/components/dash/higest-category";
import { PrismaClient } from "@prisma/client";
import { Authorized, ObjectType, Query, Resolver } from "type-graphql";
import { Currency, CurrentUser, PrismaDb, type User } from "../../decorator";
import { DashboardData } from "./app.type";

// Define GraphQL Object Type
@ObjectType()
@Resolver()
@Authorized("auth")
export class AppResolver {
  @Query(() => String)
  test(@CurrentUser() user: User): string {
    return `Ok  with user :: ${user?.name}`;
  }

  @Query(() => DashboardData)
  async dash(
    @PrismaDb() prisma: PrismaClient,
    @Currency() currency: string
  ): Promise<DashboardData> {
    const {
      currentMonthAvg,
      currentMonthData,
      percentageChange: averageChange,
      previousMonthAvg,
      previousMonthData,
    } = await getMountAverage(prisma);
    const { currentTotal, previousTotal, percentageChange } =
      await getCurrentMonthExpensesTranding(prisma);
    const { categoryStatsWithPercentage } = await getCategoryStats(prisma);
    const { highestCategory, percentage } = await getHighestCategory(prisma);
    const recent = await prisma.expense.findFirst({
      orderBy: {
        date: "desc",
      },
      include: {
        category: {
          select: {
            name: true,
          },
        },
      },
    });
    return {
      currency,
      total: {
        current: currentMonthData.totalAmount,
        previous: previousMonthData.totalAmount,
      },
      average: {
        current: currentMonthAvg,
        previous: previousMonthAvg,
        percentageChange: averageChange,
      },
      highestCategory: {
        name: highestCategory.name,
        percentage: percentage,
        total: highestCategory.totalAmount,
      },
      recent: {
        name: recent?.category.name,
        amount: recent?.amount,
        date: recent?.date,
      },
      categoryStats: categoryStatsWithPercentage,
      trending: {
        current: currentTotal,
        previous: previousTotal,
        percent: percentageChange,
      },
    };
  }
}
