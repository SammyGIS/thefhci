// middleware.js
import { NextResponse } from 'next/server';

export function middleware(req) {
  // Allow the admin route to be accessed freely without any redirects or checks
  if (req.nextUrl.pathname.startsWith('/admin')) {
    return NextResponse.next(); // Allow the request to proceed
  }

  // Add other middleware logic for different routes here, if necessary

  return NextResponse.next(); // Default behavior for all other routes
}

// Limit the middleware to admin routes (or others, as needed)
export const config = {
  matcher: ['/admin/:path*'], // Middleware will only apply to admin routes
};
