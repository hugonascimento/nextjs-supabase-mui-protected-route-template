export default function manifest() {
    return {
        name: 'MyApp',
        short_name: 'MyApp',
        description: '© MyApp',
        start_url: '/',
        display: 'fullscreen',
        //background_color: '',
        //theme_color: '',
        version: '0.1.0',
        default_locale: 'pt_BR',
        orientation: 'any',
        lang: 'pt-BR',
        display_override: ['window-controls-overlay'],
        prefer_related_applications: false,
        categories: ['entertainment', 'productivity'],
        /*icons: [
            {
                src: '/favicon.ico',
                sizes: '256x256',
                type: 'image/x-icon',
            },
            {
                src: '/assets/favicon.svg',
                sizes: 'any',
                purpose: 'any',
            },
            {
                src: '/assets/favicon.webp',
                sizes: '512x512',
                type: 'image/webp',
                purpose: 'any',
            },
        ],
        screenshots: [
            {
                src: '/assets/screenshots/screenshots1.png',
                sizes: '824x794',
                type: 'image/png',
                description: 'Home Screen',
                form_factor: 'wide',
            },
            {
                src: '/assets/screenshots/screenshots1.png',
                sizes: '824x794',
                type: 'image/png',
                description: 'Home Screen',
            },
        ],*/
    }
}
