import createMiddleware from "next-intl/middleware";
import { NextResponse, type NextRequest } from "next/server";
import { routing } from "./i18n/routing";

const intl = createMiddleware(routing);

export default function proxy(req: NextRequest) {
  // systemfriendly.in serves the v2 site at its root; systemfriendly.com is unaffected.
  const host = (req.headers.get("host") ?? "").toLowerCase();
  if (/(^|\.)systemfriendly\.in(:\d+)?$/.test(host) && req.nextUrl.pathname === "/") {
    const url = req.nextUrl.clone();
    url.pathname = "/v2";
    return NextResponse.rewrite(url);
  }
  return intl(req);
}

export const config = {
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
