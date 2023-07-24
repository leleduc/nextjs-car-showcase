/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'cdn.imagin.studio',
                port: '',

            },
        ],
    },
}

module.exports = nextConfig
