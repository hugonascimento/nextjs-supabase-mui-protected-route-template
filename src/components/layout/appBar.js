'use client'
// External libraries
import { usePathname } from 'next/navigation'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
// Internal libraries/utilities
//
// Components
//
// Stylesheets
//

export const Appbar = ({ toggleDrawer }) => {
    // Hide Appbar on /login
    const pathname = usePathname()
    return (
        <>
            {pathname === '/login' ? (
                <></>
            ) : (
                <AppBar position="fixed" color="secondary" enableColorOnDark>
                    <Toolbar variant="dense">
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            onClick={toggleDrawer(true)}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography
                            variant="h6"
                            component="div"
                            sx={{
                                flexGrow: 1,
                                textAlign: 'center',
                                //mt: -1,
                                ml: -3, // Fix center with menu buttom
                            }}
                        >
                            MyApp
                        </Typography>
                    </Toolbar>
                </AppBar>
            )}
        </>
    )
}
