import { useEffect, useState } from "react";
import Preloader from "./Preloader";
import Head from "next/head";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { useRouter } from "next/router";

const Layout = ({ children, seo }) => {
    const [loading, setLoading] = useState(true);
    const defaultSeo = {
        title: "Czechowicki Teatr Muzyczny Movimento",
        description: "Oficjalna strona Czechowickiego Teatru Muzycznego Movimento"
    };
    const { title: pageTitle, description } = seo || defaultSeo;

    const site = "https://aramilferaxa.github.io/ctmmovimento";
    const { pathname } = useRouter();
    let canonicalPath = pathname.endsWith('/') ? pathname : pathname + '/';

    const canonicalURL = site + canonicalPath;

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>{pageTitle}</title>
                <meta name="description" content={description} />
                <link rel="canonical" href={canonicalURL} />
                <meta property="og:url" content="https://aramilferaxa.github.io/ctmmovimento" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Czechowicki Teatr Muzyczny Movimento - Muzyka | Sztuka | Pasja" />
                <meta property="og:description" content="Oficjalna strona Czechowickiego Teatru Muzycznego Movimento" />
                <meta property="og:image" content="https://aramilferaxa.github.io/ctmmovimento/opengraph.jpeg" />
            </Head>
            <Preloader loading={loading} />
            <main style={{ opacity: loading ? 0 : 1 }} className="main-layout">
                <Navbar />
                {children}
                <Footer />
            </main>
        </>
    );
}

export default Layout;