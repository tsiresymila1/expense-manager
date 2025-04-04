import { auth } from "@/lib/auth";
import {
  createSafeActionClient,
  DEFAULT_SERVER_ERROR_MESSAGE,
} from "next-safe-action";
import { headers } from "next/headers";
import * as z from "zod";

class ActionError extends Error {}
export const expenseSafeAction = createSafeActionClient({
  defineMetadataSchema() {
    return z.object({
      actionName: z.string(),
    });
  },
  handleServerError(e) {
    if (e instanceof ActionError) {
      return e.message;
    }
    return DEFAULT_SERVER_ERROR_MESSAGE;
  },
}).use(async ({ next }) => {
  const user = await auth.api.getSession({
    headers: await headers(),
  });
  if (user?.user && user?.session) {
    return next();
  } else {
    throw new ActionError("Not authorized");
  }
});
