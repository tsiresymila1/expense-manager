import prisma from "@/lib/prisma";
import { ApolloServer } from "@apollo/server";
import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { createSyncSchema } from "./schema";
import { NextRequest } from "next/server";

export type Context = {
  prisma: typeof prisma;
};

const apolloServer = new ApolloServer<Context>({
  schema: createSyncSchema(),
  introspection: true,
  nodeEnv: "development"
});

const handler = startServerAndCreateNextHandler(apolloServer, {
  context: async (req, res) => ({ req, res, prisma }),
});

export function GET(req: NextRequest) {
    return handler(req)
}

export function POST(req: NextRequest) {
    return handler(req)
}
