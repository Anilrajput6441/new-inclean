import { NextRequest, NextResponse } from "next/server";

const lowercaseRoutes = new Set([
  "about",
  "contact",
  "product",
  "project",
  "projects",
]);

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const firstSegment = pathname.split("/")[1];
  const lowercasePath = pathname.toLowerCase();

  if (lowercasePath === "/home") {
    const url = request.nextUrl.clone();
    url.pathname = "/";
    return NextResponse.redirect(url, 308);
  }

  if (
    lowercasePath === "/project" ||
    lowercasePath.startsWith("/project/")
  ) {
    const url = request.nextUrl.clone();
    url.pathname = lowercasePath.replace(/^\/project/, "/projects");
    return NextResponse.redirect(url, 308);
  }

  if (
    firstSegment &&
    lowercaseRoutes.has(firstSegment.toLowerCase()) &&
    pathname !== lowercasePath
  ) {
    const url = request.nextUrl.clone();
    url.pathname = lowercasePath;
    return NextResponse.redirect(url, 308);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
