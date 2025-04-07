import { auth } from "@/lib/auth";
import prisma from "@/lib/prisma";
import { createLocalJWKSet, jwtVerify } from "jose";
import { AuthCheckerInterface, ResolverData } from "type-graphql";
import { ContextType } from "./decorator";

export async function decodePayload(token: string) {
  const JWKS = await auth.api.getJwks();
  const keyStore = createLocalJWKSet(JWKS);
  try {
    const { payload } = await jwtVerify(token, keyStore, {
      algorithms: ["RS256"],
    });
    const user = await prisma.user.findUnique({
      where: {
        id: payload.sub,
      },
    });
    return user;
  } catch (e) {
    console.error("JWT verification failed:", e);
    return undefined;
  }
}

export class CustomAuthChecker implements AuthCheckerInterface<ContextType> {
  async check({ context }: ResolverData<ContextType>): Promise<boolean> {
    const token = context.req.headers.get("x-api-token");
    const user = await decodePayload(token!);
    if (user) {
      context.user = user;
      return true;
    }
    return false;
  }
}
