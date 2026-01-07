/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'gerold.themejunction.net',
                port: '',
                pathname: '/**',
            },
        ],
    },
};

export default nextConfig;
