/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    assetPrefix: '.',
    compiler: {
        styledComponents: true
    },
    images: {
        unoptimized: true,
    },
    reactStrictMode: true,
    trailingSlash: true,
};

export default nextConfig;
