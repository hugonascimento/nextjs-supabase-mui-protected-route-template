// External libraries
import { createClient } from '@/utils/supabase/client'
// Internal libraries/utilities
//
// Components
//
// Stylesheets
//

export default async function GetProfile() {
    const supabase = createClient()
    const { data: profile } = await supabase.from('profiles').select().single()
    return profile
}
