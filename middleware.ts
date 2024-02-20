import { NextRequest, NextResponse } from "next/server";
import { COOKIE_KEYS } from "./constants/config";
import { ROUTES_PATH } from "./constants/routes";

export function middleware(request: NextRequest) {
  const isLogged = request.cookies.get(COOKIE_KEYS.token);

  if (request.nextUrl.pathname.startsWith(ROUTES_PATH.dashboard) && !isLogged) {
    return NextResponse.redirect(new URL(ROUTES_PATH.home, request.nextUrl));
  }

  if (request.nextUrl.pathname === ROUTES_PATH.home && isLogged) {
    return NextResponse.redirect(
      new URL(ROUTES_PATH.dashboard, request.nextUrl),
    );
  }

  return NextResponse.next();
}
