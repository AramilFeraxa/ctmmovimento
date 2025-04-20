import Gallery from "../../Components/Gallery/GalleryGrid"
import Layout from "../../Components/Layout/Layout"
import PageHeader from "@/Components/PageHeader/PageHeader"

export default function Home() {
    const Seo = {
        title: "Galeria | Czechowicki Teatr Muzyczny Movimento",
        description: "Galeria występów Czechowickiego Teatru Muzycznego Movimento",
    }
    return (
        <Layout seo={Seo}>
            <PageHeader title="Galeria" />
            <Gallery />
        </Layout>
    )
}
