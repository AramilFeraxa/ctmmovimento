/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    assetPrefix: '/ctmmovimento/',
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
