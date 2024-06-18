import { NextRequest, NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
  return NextResponse.redirect(new URL('/', request.url))
}

export const config = {
    matcher: "/homes",
}

// or

// export function middleware(request: NextRequest) {
//   if (request.nextUrl.pathname === '/posts') {
//     return NextResponse.redirect(new URL('/', request.url))
//   }
// }
