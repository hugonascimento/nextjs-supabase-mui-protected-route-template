'use server'
// External libraries
import 'server-only'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
// Internal libraries/utilities
import { createClient } from '@/utils/supabase/server'
// Components
import LoginUI from './loginUi'
// Stylesheets
//

export default async function Login() {
    // Check current session
    const supabase = createClient()

    const {
        data: { user },
    } = await supabase.auth.getUser()

    if (user) {
        revalidatePath('/', 'layout')
        redirect('/')
    }
    return <LoginUI />
}
