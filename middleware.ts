import { headers } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { authClient } from "./lib/auth-client";

export async function middleware(request: NextRequest) {
  const session = await authClient.getSession({
    fetchOptions: {
      headers: await headers(),
    },
  });
  // const sessionCookie = getSessionCookie(request);
  // console.log("sess::", sess);
  // console.log("sessionCookie::", sessionCookie);
  if (!session.data?.user) {
    return NextResponse.redirect(new URL("/auth/login", request.url));
  }
  return NextResponse.next({ request });
}

export const config = {
  matcher: [
    "/((?!_next/static|api|auth|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
