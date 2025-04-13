import { useEffect, useState } from "react";
import Preloader from "./Preloader";
import Head from "next/head";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";


const Layout = ({ children, seo }) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            <Head>
                <title>Czechowicki Teatr Muzyczny Movimento</title>
                <meta name="description" content="Oficjalna strona Czechowickiego Teatru Muzycznego Movimento" />
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