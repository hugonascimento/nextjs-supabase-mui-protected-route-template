'use client'
// External libraries
import Box from '@mui/material/Box'
import CircularProgress from '@mui/material/CircularProgress'
// Internal libraries/utilities
//
// Components
//
// Stylesheets
//

export function LoadingScreen() {
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
                width: '100vw',
                p: 0,
                m: 0,
                position: 'absolute',
                top: '0px',
                left: '0px',
                bgcolor: '#4e4e4e',
                zIndex: (theme) => theme.zIndex.appBar + 1001,
            }}
        >
            <CircularProgress color="secondary" />
        </Box>
    )
}
