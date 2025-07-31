import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const session = request.cookies.get('session')
  const { pathname } = request.nextUrl

  // Public paths that don't require authentication
  const publicPaths = ['/sign-in', '/sign-up']
  
  // Check if the current path is public
  const isPublicPath = publicPaths.some(path => pathname.startsWith(path))

  // If user is not authenticated and trying to access protected route
  if (!session && !isPublicPath) {
    return NextResponse.redirect(new URL('/sign-in', request.url))
  }

  // If user is authenticated and trying to access auth pages
  if (session && isPublicPath) {
    return NextResponse.redirect(new URL('/', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
} 