import Head from 'next/head'
import Navbar from "@/components/Navbar/Navbar"
import Hero from "@/components/Hero/Hero"
import About from "@/components/About/About"
import Shows from "@/components/Shows/Shows"
import Gallery from "@/components/Gallery/Gallery"
import Footer from "@/components/Footer/Footer"
import Layout from "@/components/Layout/Layout"

export default function Home() {
    return (
        <Layout>
            <Hero />
            <About />
            <Shows />
            <div style={{ background: 'var(--burgundy)', height: '250px' }}>
                <p style={{ color: 'white', textAlign: 'center', paddingTop: '100px' }}>
                    tu będzie coś
                </p>
            </div>
            <Gallery />
        </Layout>
    )
}
