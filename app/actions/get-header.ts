import { headers } from "next/headers";
import { userAgent } from "next/server";

export async function getUserAgent() {
  const headersList = await headers();
  const agent = userAgent({
    headers: headersList,
  });
  return agent;
}
