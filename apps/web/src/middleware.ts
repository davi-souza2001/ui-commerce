import { NextResponse, NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const token = request.cookies.get('token-login-ui-commerce')?.value
  if (!token && request.nextUrl.pathname !== '/login') {
    return NextResponse.redirect(new URL('/login', request.url))
  }
}

export const config = {
  matcher: ['/', '/cart', '/wishlist'],
}
