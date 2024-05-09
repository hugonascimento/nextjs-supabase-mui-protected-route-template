'use server'
// External libraries
import 'server-only'
import { NextResponse } from 'next/server'
// Internal libraries/utilities
import { updateSession } from '@/utils/supabase/middleware'
import { createClient } from '@/utils/supabase/server'
// Components
//
// Stylesheets
//

export async function middleware(request) {
    const res = NextResponse.next()

    // Refresh session if expired - required for Server Components
    const supabase = createClient()
    const {
        data: { user },
    } = await supabase.auth.getUser()

    if (
        !user &&
        !request.url.includes('/login') //&&
        //!req.url.includes('/shared/')
    ) {
        return NextResponse.redirect(new URL('/login', request.url))
    }

    // update user's auth session
    return await updateSession(request), res
}

// Ensure the middleware is only called for relevant paths.
export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - shared (publicly shared chats)
         * - api (API routes)
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - manifest (webmanifest)
         * - assets (All assets in public folder)
         * - favicon.ico (favicon file)
         */
        '/((?!shared|api|_next/static|_next/image|manifest|assets|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
    ],
}
