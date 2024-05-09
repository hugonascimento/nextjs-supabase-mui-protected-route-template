'use client'
// External libraries
import { Roboto } from 'next/font/google'
// Internal libraries/utilities
//
// Components
//
// Stylesheets
//

const roboto = Roboto({
    weight: ['300', '400', '500', '700'],
    subsets: ['latin'],
    display: 'swap',
})

export const getDesignTokens = (mode) => ({
    palette: {
        mode,
        ...(mode === 'light'
            ? {
                  // palette values for light mode
                  secondary: {
                      main: '#725cff', // (all icons) and links globals.css
                  },
                  /* 
                  primary: {
                      main: '',
                  },
                  
                  text: {
                      primary: '',
                      secondary: '',
                      link: '',
                  },
                  background: {
                      default: '',
                      paper: '',
                      dark: '',
                  }, 
                  */
              }
            : {
                  // palette values for dark mode
                  secondary: {
                      main: '#725cff', // (all icons) and links globals.css
                  },
              }),
    },
    typography: {
        fontFamily: roboto.style.fontFamily,
    },
    components: {
        // All themes
    },
})
