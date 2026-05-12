import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";


const blockedPatterns = [
  /(\b)(on\w+\s*=|javascript\s*:)/i,
  /<script/i,
  /<iframe/i,
  /SELECT\s+.*FROM/i,
  /UNION\s+SELECT/i,
  /DROP\s+TABLE/i,
  /\.\.\/\.\.\//i,
];

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const url = request.url;

  
  for (const pattern of blockedPatterns) {
    if (pattern.test(url)) {
      return new NextResponse("Forbidden", { status: 403 });
    }
  }

  
  if (
    pathname.startsWith("/admin") ||
    pathname.startsWith("/maintenance") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/_next") ||
    pathname.includes(".")
  ) {
    return NextResponse.next();
  }

  
  try {
    const baseUrl = request.nextUrl.origin;
    const res = await fetch(`${baseUrl}/api/admin/maintenance`);
    const data = await res.json();

    if (data.maintenance) {
      return NextResponse.redirect(new URL("/maintenance", request.url));
    }
  } catch {
    // Si l'API échoue, on laisse passer
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};