// External libraries
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter'
// Internal libraries/utilities
//
// Components
import LayoutParams from '@/components/layout'
// Stylesheets
//

// metadata
export const metadata = {
    title: {
        default: 'MyApp',
        template: `%s | MyApp`,
    },
    description: '© MyApp. Ңџбо Идѕсїщэлҭф.',
    applicationName: 'MyApp',
    authors: [
        { name: 'Ңџбо Идѕсїщэлҭф', url: 'https://github.com/hugonascimento' },
    ],
    creator: 'Ңџбо Идѕсїщэлҭф',
    //metadataBase: new URL('https://myapp.com'),
    openGraph: {
        title: 'MyApp',
        description: '© MyApp. Powered by Ңџбо Идѕсїщэлҭф.',
        //url: 'https://myapp.com',
        siteName: 'MyApp',
        images: [
            {
                //url: 'https://myapp.com/assets/icon-512x512.png',
                //width: 512,
                //height: 512,
            },
        ],
        locale: 'pt_BR', // Portuguese Brazil
        //type: 'website',
    },
    robots: {
        index: false,
        follow: false,
        nocache: true,
        googleBot: {
            index: false,
            follow: false,
            noimageindex: true,
        },
    },
    verification: {
        //google: '',
    },
}

export default function RootLayout(props) {
    const { children } = props
    return (
        <html lang="pt-BR">
            <body>
                <AppRouterCacheProvider
                    options={{
                        enableCssLayer: false,
                        /*If true, the generated styles are wrapped within @layer mui. This is useful if you want to override the Material UI's generated styles with different styling solution, like Tailwind CSS, plain CSS etc.*/
                    }}
                >
                    <LayoutParams>{children}</LayoutParams>
                </AppRouterCacheProvider>
            </body>
        </html>
    )
}
