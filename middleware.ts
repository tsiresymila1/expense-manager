import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith("/dashboard")) {
    const data = await auth.api.getSession({
      headers: await headers(),
    });
    if (!data?.user || !data?.session) {
      return NextResponse.redirect(new URL("/auth/login", request.url));
    }
  }
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-pathname", request.nextUrl.pathname);
  return NextResponse.next({
    request: {
      ...request,
      headers: requestHeaders,
    },
  });
}

export const config = {
  runtime: "nodejs",
  matcher: [
    "/((?!_next/static|!api|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
