/** @type {import('next').NextConfig} */

//App version
import baseConfig from './package.json' with { type: 'json' }
const version = baseConfig.version
export const appVersion = version

const nextConfig = {
    reactStrictMode: true,
    compiler: {
        removeConsole: process.env.NODE_ENV === 'production',
    },
}

export default nextConfig
