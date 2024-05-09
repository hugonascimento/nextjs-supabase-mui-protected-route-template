'use client'
// External libraries
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
// Internal libraries/utilities
import { appVersion } from '../../../next.config.mjs'
// Components
//
// Stylesheets
//

export const Footer = () => {
    const year = new Date().getFullYear()
    return (
        <Box
            sx={{
                position: 'relative',
                bottom: 0,
                left: 0,
                width: '100%',
            }}
        >
            <Typography
                variant="footer"
                sx={{
                    display: 'flex',
                    textAlign: 'center',
                    justifyContent: 'center',
                    px: 1,
                    color: 'text.secondary',
                    fontSize: '12px',
                }}
            >
                © {year} MyApp v.{appVersion}
            </Typography>
        </Box>
    )
}
