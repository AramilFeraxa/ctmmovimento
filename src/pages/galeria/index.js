import Gallery from "../../Components/Gallery/GalleryGrid"
import Layout from "../../Components/Layout/Layout"
import PageHeader from "@/Components/PageHeader/PageHeader"

export default function Home() {
    return (
        <Layout>
            <PageHeader title="Galeria" />
            <Gallery />
        </Layout>
    )
}
