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
