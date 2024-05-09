'use client'
// External libraries
import { useEffect, useMemo, useState } from 'react'
import { usePathname } from 'next/navigation'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import useMediaQuery from '@mui/material/useMediaQuery'
import Container from '@mui/material/Container'
// Internal libraries/utilities
import { AuthProvider } from '@/contexts/auth'
// Components
import { LoadingScreen } from '../ui/loadingScreen'
import { Appbar } from './appBar'
import { Sidebar } from './sideBar'
import { Footer } from './footer'
// Stylesheets
import { getDesignTokens } from '@/theme/theme'

export default function LayoutParams({ children }) {
    // drawer state
    const [open, setOpen] = useState(false)
    // toggle Drawer
    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen)
    }
    // verify OS theme
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')
    // Set theme mode
    const [themeMode, setThemeMode] = useState('dark')
    // loadscreen when unmonted
    const [mounted, setMounted] = useState(false)
    // verify OS Theme on mount
    useEffect(() => {
        if (!localStorage.getItem('mode')) {
            setThemeMode(prefersDarkMode ? 'dark' : 'light')
        }
        setMounted(true)
    }, [prefersDarkMode])
    // update the theme only if the mode changes
    const theme = useMemo(
        () => createTheme(getDesignTokens(themeMode)),
        [themeMode]
    )
    // Hide Footer on !/login
    const pathname = usePathname()
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <AuthProvider>
                <Appbar toggleDrawer={toggleDrawer} open={open} />
                <Sidebar
                    setThemeMode={setThemeMode}
                    toggleDrawer={toggleDrawer}
                    open={open}
                />
                {!mounted ? (
                    <LoadingScreen />
                ) : (
                    <>
                        {pathname === '/login' ? (
                            <>
                                <Container
                                    maxWidth="false" // for custom maxWidth
                                    sx={{
                                        maxWidth: '1920px',
                                        p: 3,
                                        userSelect: 'none',
                                        minHeight: 'calc(100vh - 20px)',
                                        overflowX: 'hidden',
                                    }}
                                >
                                    {children}
                                </Container>
                                <Footer />
                            </>
                        ) : (
                            <Container
                                maxWidth="false" // for custom maxWidth
                                sx={{
                                    maxWidth: '1920px',
                                    mt: '50px',
                                    p: 3,
                                    userSelect: 'none',
                                    minHeight: 'calc(100vh - 50px)',
                                    overflowX: 'hidden',
                                }}
                            >
                                {children}
                            </Container>
                        )}
                    </>
                )}
            </AuthProvider>
        </ThemeProvider>
    )
}
