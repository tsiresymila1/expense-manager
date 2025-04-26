import prisma from "@/lib/prisma";
import { ApolloServer } from "@apollo/server";
import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { NextRequest } from "next/server";
import { ContextType } from "./decorator";
import { createSyncSchema } from "./schema";

const apolloServer = new ApolloServer<ContextType>({
  schema: createSyncSchema(),
  introspection: true,
  nodeEnv: "development",
});

const handler = startServerAndCreateNextHandler<NextRequest, ContextType>(
  apolloServer,
  {
    context: async (req, res) => ({ req, res, prisma }),
  }
);

export function GET(req: NextRequest) {
  return handler(req);
}

export function POST(req: NextRequest) {
  return handler(req);
}
