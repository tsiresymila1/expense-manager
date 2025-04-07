import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
  const data = await auth.api.getSession({
    headers: await headers(),
  });
  if (!data?.user) {
    return NextResponse.redirect(new URL("/auth/login", request.url));
  }
  return NextResponse.next({ request });
}

export const config = {
  runtime: "nodejs",
  matcher: [
    "/((?!_next/static|api|cgu|auth|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
