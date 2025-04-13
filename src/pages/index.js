import Hero from "../Components/Hero/Hero"
import About from "../Components/About/About"
import Shows from "../Components/Shows/Shows"
import Gallery from "../Components/Gallery/Gallery"
import Footer from "../Components/Footer/Footer"
import Layout from "../Components/Layout/Layout"

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
