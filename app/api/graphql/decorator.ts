import { auth } from "@/lib/auth";
import { NextRequest } from "next/server";
import { createParameterDecorator } from "type-graphql";

export type ContextType = {
  req: NextRequest;
};

export type User = NonNullable<
  Awaited<ReturnType<typeof auth.api.getSession>>
>["user"];

export function CurrentUser() {
  return createParameterDecorator<ContextType>(
    async ({ context }): Promise<User | undefined> => {
      const res = await auth.api.getSession({
        headers: context.req.headers,
      });
      return res?.user;
    }
  );
}
