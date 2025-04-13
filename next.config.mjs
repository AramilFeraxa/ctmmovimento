/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: '/ctmmovimento',
    assetPrefix: '/ctmmovimento/',
    compiler: {
        styledComponents: true
    },
    images: {
        unoptimized: true,
    },
    reactStrictMode: true,
    trailingSlash: true,
    output: 'export',
};

export default nextConfig;
