import { NextRequest, NextResponse } from 'next/server'
import { getUrl } from './lib/get-url'

export function middleware(request: NextRequest) {
  const token = request.cookies.get('next-auth.session-token')
  const pathname = request.nextUrl.pathname

  console.log('middleware', { token, pathname })

  if (pathname === '/' && token) {
    return NextResponse.redirect(new URL(getUrl('/dashboard')))
  }

  if (pathname.includes('/dashboard') && !token) {
    return NextResponse.redirect(new URL(getUrl('/')))
  }
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}