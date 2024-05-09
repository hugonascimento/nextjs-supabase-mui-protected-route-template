'use client'
// External libraries
import { useCallback, useEffect, useState } from 'react'
import Typography from '@mui/material/Typography'
// Internal libraries/utilities
import GetProfile from '@/utils/supabase/getProfile'
// Components
//
// Stylesheets
//
export default function Profile() {
    // Check current profile
    const [profile, setProfile] = useState(null)
    const getProfile = useCallback(async () => {
        const profile = await GetProfile()
        if (!profile) {
            console.log('Error loading user profile!')
        }
        setProfile(profile)
    }, [])
    useEffect(() => {
        getProfile()
    }, [getProfile])

    return (
        <>
            <Typography variant="h6" sx={{ pb: 1 }}>
                Profile table contents
            </Typography>
            <Typography
                sx={{
                    overflowX: 'auto !important', // only for JSON
                }}
            >
                {JSON.stringify(profile)}
            </Typography>
        </>
    )
}
