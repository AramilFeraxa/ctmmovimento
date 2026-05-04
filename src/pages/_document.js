import Document from "next/document";
import { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
    render() {
        return (
            <Html lang="pl-PL">
                <Head>
                    <link rel="icon" href="https://ctmmovimento.pl/favicon.ico" />
                    <link rel="apple-touch-icon" sizes="180x180" href="https://ctmmovimento.pl/apple-touch-icon.png" />
                    <link rel="icon" type="image/png" sizes="32x32" href="https://ctmmovimento.pl/favicon-32x32.png" />
                    <link rel="icon" type="image/png" sizes="16x16" href="https://ctmmovimento.pl/favicon-16x16.png" />
                    <link rel="android-chrome" sizes="192x192" href="https://ctmmovimento.pl/android-chrome-192x192.png" />
                    <link rel="android-chrome" sizes="512x512" href="https://ctmmovimento.pl/android-chrome-512x512.png" />

                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
                    <link
                        href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400&display=swap"
                        rel="stylesheet"
                    />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;