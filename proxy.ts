import { NextRequest, NextResponse } from "next/server"

export function proxy(request: NextRequest) {

    const token = request.cookies.get("token")?.value

    const isHome = request.nextUrl.pathname === "/";

    if (token && isHome) {
        return NextResponse.redirect(new URL("/dashboard/feed", request.url))
    }

    if (!token && !isHome) {
        return NextResponse.redirect(new URL("/", request.url))
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/', '/dashboard/:path*'],
}