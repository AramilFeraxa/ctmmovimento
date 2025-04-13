/** @type {import('next').NextConfig} */
const nextConfig = {
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
