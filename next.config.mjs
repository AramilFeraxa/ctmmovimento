import { PHASE_DEVELOPMENT_SERVER } from 'next/constants.js';

export default (phase) => {
    const isDev = phase === PHASE_DEVELOPMENT_SERVER;
    /***
    * @type {import('next').NextConfig}
    */
    const nextConfig = {
        output: 'export',
        assetPrefix: isDev ? undefined : '/ctmmovimento/',
        basePath: isDev ? undefined : '/ctmmovimento',
        compiler: {
            styledComponents: true
        },
        images: {
            unoptimized: true,
        },
        trailingSlash: true,
        i18n: undefined,
    };

    return nextConfig;
}
