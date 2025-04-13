/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    assetPrefix: '/ctmmovimento/',
    basePath: '/ctmmovimento',
    compiler: {
        styledComponents: true
    },
    images: {
        unoptimized: true,
    },
    trailingSlash: true,
    i18n: undefined,
};

export default nextConfig;
