import { NextRequest, NextResponse } from "next/server";

const lowercaseRoutes = new Set(["about", "contact", "product", "project"]);

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const firstSegment = pathname.split("/")[1];

  if (
    firstSegment &&
    lowercaseRoutes.has(firstSegment.toLowerCase()) &&
    pathname !== pathname.toLowerCase()
  ) {
    const url = request.nextUrl.clone();
    url.pathname = pathname.toLowerCase();
    return NextResponse.redirect(url, 308);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
