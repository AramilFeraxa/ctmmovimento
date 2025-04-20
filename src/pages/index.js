import Hero from "../Components/Hero/Hero"
import About from "../Components/About/About"
import Shows from "../Components/Shows/Shows"
import GallerySlider from "../Components/Gallery/GallerySlider"
import TicketsInfo from "../Components/TicketsInfo/TicketsInfo"
import Layout from "../Components/Layout/Layout"

export default function Home() {
    const Seo = {
        title: "Czechowicki Teatr Muzyczny Movimento - Muzyka | Sztuka | Pasja",
        description: "Oficjalna strona Czechowickiego Teatru Muzycznego Movimento",
    }
    return (
        <Layout seo={Seo}>
            <Hero />
            <About />
            <Shows />
            <TicketsInfo />
            <GallerySlider />
        </Layout>
    )
}
