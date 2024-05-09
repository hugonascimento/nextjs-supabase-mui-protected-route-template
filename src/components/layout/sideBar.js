'use client'
// External libraries
import NextLink from 'next/link'
import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import Divider from '@mui/material/Divider'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Typography from '@mui/material/Typography'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined'
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined'
import GavelOutlinedIcon from '@mui/icons-material/GavelOutlined'
import PrivacyTipOutlinedIcon from '@mui/icons-material/PrivacyTipOutlined'
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined'
// Internal libraries/utilities
import { appVersion } from '../../../next.config.mjs'
// Components
import { ThemeToggle } from './themeToggle'
// Stylesheets
//

export const Sidebar = ({ toggleDrawer, open, setThemeMode }) => {
    // get date
    const year = new Date().getFullYear()
    // menu buttons
    const linkButtons = [
        {
            href: '/',
            icon: <HomeOutlinedIcon />,
            title: 'Home',
        },
        {
            href: '/profile',
            icon: <AccountCircleOutlinedIcon />,
            title: 'Profile',
        },
        {
            href: '/terms-of-use',
            icon: <GavelOutlinedIcon />,
            title: 'Terms of use',
        },
        {
            href: '/privacy',
            icon: <PrivacyTipOutlinedIcon />,
            title: 'Privacy',
        },
    ]

    const DrawerList = (
        <Box
            sx={{ width: 220 }}
            //role="presentation"
            onClick={toggleDrawer(false)}
        >
            <List>
                {linkButtons.map((item) => (
                    <ListItem key={item.title} disablePadding>
                        <ListItemButton href={item.href} component={NextLink}>
                            <ListItemIcon>{item.icon}</ListItemIcon>
                            <ListItemText primary={item.title} />
                        </ListItemButton>
                    </ListItem>
                ))}
                <ListItem disablePadding>
                    <form action="/api/auth/signout" method="post">
                        <ListItemButton
                            type="submit"
                            component="button"
                            sx={{ width: 220 }}
                        >
                            <ListItemIcon>
                                <LogoutOutlinedIcon />
                            </ListItemIcon>
                            <ListItemText primary={'Sign out'} />
                        </ListItemButton>
                    </form>
                </ListItem>
            </List>
            <Divider />
            <Box
                sx={{
                    position: 'fixed',
                    bottom: '0px',
                    left: '0px',
                    p: 0,
                    m: 0,
                }}
            >
                <Divider />
                <Box
                    sx={{
                        pt: 1,
                    }}
                >
                    <ThemeToggle setThemeMode={setThemeMode} />
                    <Typography
                        sx={{
                            fontSize: '0.7rem',
                            mt: '-35px',
                            pl: 9,
                            userSelect: 'none',
                        }}
                    >
                        © {year} MyApp v.{appVersion}
                        <br />
                    </Typography>
                    <Typography
                        sx={{
                            fontSize: '0.7rem',
                            pl: 6,
                            pb: 1,
                        }}
                    >
                        Powered by Ңџбо Идѕсїщэлҭф
                    </Typography>
                </Box>
            </Box>
        </Box>
    )

    return (
        <Drawer
            variant="temporary"
            ModalProps={{
                keepMounted: true,
            }}
            open={open}
            onClose={toggleDrawer(false)}
        >
            {DrawerList}
        </Drawer>
    )
}
