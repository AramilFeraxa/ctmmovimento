import { useRouter } from 'next/router'
import Image from 'next/image'
import { galleries } from '../../data/galleries'
import styles from '../../Components/Gallery/GalleryPage.module.css'
import exampleImage from '../../assets/images/example.jpg'
import Layout from '@/Components/Layout/Layout'
import { Container } from 'react-bootstrap'

export default function GalleryPage({ gallery }) {
    const router = useRouter()

    if (!gallery) {
        return <p style={{ padding: '2rem' }}>Galeria nie została znaleziona.</p>
    }

    const Seo = {
        title: `Galeria - ${gallery.title} | Czechowicki Teatr Muzyczny Movimento`,
        description: `Galeria zdjęć z wydarzenia ${gallery.title}`,
    }
    return (
        <Layout seo={Seo}>
            <Container>
                <section className={styles.wrapper}>
                    <button className={`${styles.backButton} button`} onClick={() => router.push('/')}>
                        <i className="fa-solid fa-arrow-left" /> Powrót
                    </button>
                    <p>Galeria zdjęć</p>
                    <h1>{gallery.title}</h1>
                    <div className={styles.grid}>
                        {gallery.images.map((src, i) => (
                            <div key={i} className={styles.imageWrapper}>
                                <img src={src.src} alt={`Zdjęcie ${i + 1}`} />
                            </div>
                        ))}
                    </div>
                </section>
            </Container>
        </Layout>
    )
}

export async function getStaticPaths() {
    const paths = galleries.map(gallery => ({
        params: { slug: gallery.slug },
    }))

    return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
    const gallery = galleries.find(g => g.slug === params.slug) || null
    return {
        props: { gallery },
    }
}
