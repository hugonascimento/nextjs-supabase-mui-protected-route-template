'use client'
// External libraries
import { createContext, useCallback, useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
// Internal libraries/utilities
import { createClient } from '@/utils/supabase/client'
// Components
//
// Stylesheets
//

export const AuthContext = createContext()

export const AuthProvider = (props) => {
    const pathname = usePathname()
    // Check current session
    const [currentUser, setCurrentUser] = useState(null)
    const supabase = createClient()
    const fetchUser = useCallback(async () => {
        const {
            data: { user },
        } = await supabase.auth.getUser()
        setCurrentUser(user)
    }, [supabase])
    // disable check on login page
    useEffect(() => {
        if (pathname === '/login') {
            return
        }
        fetchUser()
    }, [pathname, fetchUser])

    return (
        <AuthContext.Provider value={currentUser}>
            {props.children}
        </AuthContext.Provider>
    )
}
