import createMiddleware from "next-intl/middleware";
import { NextResponse, type NextRequest } from "next/server";
import { routing } from "./i18n/routing";

const intl = createMiddleware(routing);
const IN_HOST = /(^|\.)systemfriendly\.in(:\d+)?$/;

export default function proxy(req: NextRequest) {
  const host = (req.headers.get("host") ?? "").toLowerCase();
  if (!IN_HOST.test(host)) return intl(req);

  // systemfriendly.in: serve v2 at root, and keep it out of search engines while it is being built.
  let res: NextResponse;
  if (req.nextUrl.pathname === "/") {
    const url = req.nextUrl.clone();
    url.pathname = "/en/v2";
    res = NextResponse.rewrite(url);
  } else {
    res = intl(req) as NextResponse;
  }
  res.headers.set("X-Robots-Tag", "noindex, nofollow");
  return res;
}

export const config = {
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
