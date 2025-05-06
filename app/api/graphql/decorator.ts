import prisma from "@/lib/prisma";
import { NextRequest } from "next/server";
import { createParameterDecorator } from "type-graphql";
import { decodePayload } from "./checker";

export type User = Awaited<ReturnType<typeof decodePayload>>;

export type ContextType = {
  req: NextRequest;
  user?: User;
  prisma: typeof prisma;
};

export function CurrentUser() {
  return createParameterDecorator<ContextType>(
    async ({ context }): Promise<User | undefined> => {
      return context.user;
    }
  );
}

export function PrismaDb() {
  return createParameterDecorator<ContextType>(
    async ({ context }): Promise<typeof prisma | undefined> => {
      return context.prisma;
    }
  );
}

export function Currency() {
  return createParameterDecorator<ContextType>(
    async ({ context }): Promise<string | null> => {
      const currency = await context.prisma.setting.findUnique({
        where: {
          userId: context.user?.id,
          key: `${context.user?.id}_currency_symbol`,
        },
      });
      return currency?.value ?? "$";
    }
  );
}
