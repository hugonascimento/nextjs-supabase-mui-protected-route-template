// External libraries
import { useEffect, useMemo, useState } from 'react'
import useMediaQuery from '@mui/material/useMediaQuery'
import IconButton from '@mui/material/IconButton'
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined'
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined'
import DevicesOutlinedIcon from '@mui/icons-material/DevicesOutlined'
// Internal libraries/utilities
//
// Components
//
// Stylesheets
//

export const ThemeToggle = ({ setThemeMode }) => {
    // verify OS theme
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')
    // only for icons
    const [themeMode, setMode] = useState()
    // toggle theme
    const colorMode = useMemo(
        () => ({
            handleThemeChange: (mode) => {
                // return to layout and change theme
                setThemeMode(() => mode)
                // set to local storage
                localStorage.setItem('mode', mode)
                console.log(mode)
            },
        }),
        [setThemeMode]
    )
    // delete theme mode from local
    const deleteLocal = () => {
        localStorage.removeItem('mode')
    }

    // verify and set theme mode
    useEffect(() => {
        if (localStorage.getItem('mode')) {
            setThemeMode(localStorage.getItem('mode'))
            setMode(localStorage.getItem('mode'))
        } else {
            setMode('automatic')
        }
    }, [setThemeMode])

    return (
        <>
            {themeMode === 'automatic' ? (
                <IconButton
                    aria-label="Tema Automático"
                    sx={{ ml: 1 }}
                    onClick={() => {
                        colorMode.handleThemeChange('light')
                        setMode('light')
                    }}
                    color="inherit"
                >
                    <DevicesOutlinedIcon />
                </IconButton>
            ) : (
                <></>
            )}
            {themeMode === 'light' ? (
                <IconButton
                    aria-label="Tema Claro"
                    sx={{ ml: 1 }}
                    onClick={() => {
                        colorMode.handleThemeChange('dark')
                        setMode('dark')
                    }}
                    color="inherit"
                >
                    <LightModeOutlinedIcon />
                </IconButton>
            ) : (
                <></>
            )}
            {themeMode === 'dark' ? (
                <IconButton
                    aria-label="Tema Escuro"
                    sx={{ ml: 1 }}
                    onClick={() => {
                        colorMode.handleThemeChange(
                            prefersDarkMode ? 'dark' : 'light'
                        )
                        setMode('automatic')
                        deleteLocal()
                    }}
                    color="inherit"
                >
                    <DarkModeOutlinedIcon />
                </IconButton>
            ) : (
                <></>
            )}
        </>
    )
}
