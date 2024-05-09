'use server'
// External libraries
import 'server-only'
//import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'
// Internal libraries/utilities
import { createClient } from '@/utils/supabase/server'
// Components
//
// Stylesheets
//

export async function GET(request) {
    const requestUrl = new URL(request.url)
    const code = requestUrl.searchParams.get('code')

    if (code) {
        const supabase = createClient()
        await supabase.auth.exchangeCodeForSession(code)
    }
    // return the user to an error page with instructions
    return NextResponse.redirect(requestUrl.origin)
}
