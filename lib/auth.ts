import { PrismaClient } from "@prisma/client";
import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { nextCookies } from "better-auth/next-js";
import { jwt } from "better-auth/plugins";

const prisma = new PrismaClient();

export const auth = betterAuth({
  advanced: {
    cookiePrefix: "expense-manager",
  },
  emailAndPassword: {
    enabled: true,
    password: {
      hash: async (value) => value,
      verify: async ({ hash, password }) => hash === password,
    },
  },
  database: prismaAdapter(prisma, {
    provider: "postgresql",
  }),
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    },
  },
  plugins: [
    nextCookies(),
    jwt({
      jwks: {
        keyPairConfig: {
          alg: "RS256",
          modulusLength: 2048,
        },
      },
      jwt: {
        expirationTime: "7d",
      },
    }),
  ],
});
