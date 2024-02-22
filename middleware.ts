export { default } from 'next-auth/middleware'
export const config = {
  matcher: ['/admin/event/:path*', '/admin/gallary/:path*'],
}
