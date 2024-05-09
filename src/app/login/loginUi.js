'use client'
// External libraries
import { createClient } from '@/utils/supabase/client'
import { Auth } from '@supabase/auth-ui-react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
// Internal libraries/utilities
import { getURL } from '@/lib/getURL'
// Components
//
// Stylesheets
//

export default function LoginUI() {
    const url = getURL()
    const supabase = createClient()
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: 'calc(100vh - 85px)',
            }}
        >
            <Box>
                <Typography variant="h6" sx={{ textAlign: 'center', pb: 1 }}>
                    Log in to access the system
                </Typography>
                <Auth
                    supabaseClient={supabase}
                    appearance={{
                        extend: false,
                        style: {
                            button: {
                                cursor: 'pointer',
                                width: '100%',
                                height: 48,
                                fontSize: '1rem',
                                textTransform: 'none',
                                background:
                                    'linear-gradient(90deg,rgba(114,92,255, 0.6) 0%, rgba(114,92,255, 0.8) 50%, rgba(114,92,255, 0.5) 100%)',
                                border: 0,
                                borderRadius: '10px',
                            },
                        },
                    }}
                    providers={['google']}
                    redirectTo={`${url}api/auth/callback`}
                    socialLayout="horizontal"
                    onlyThirdPartyProviders={true}
                />
            </Box>
        </Box>
    )
}
