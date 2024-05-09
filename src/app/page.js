// External libraries
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
// Internal libraries/utilities
//
// Components
//
// Stylesheets
//

export default function Home() {
    return (
        <Box
            sx={{
                my: 4,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <Typography variant="h4" component="h1">
                Material UI - Next.js App Router example in JavaScript.
            </Typography>
            <Typography variant="h4" component="h1" sx={{ mb: 2 }}>
                With supabase and protected routes.
            </Typography>
        </Box>
    )
}
