import Link from 'next/link'
import Image from 'next/image'
import styles from './GallerySlider.module.css'
import layout from './GalleryGrid.module.css'
import { galleries } from '../../data/galleries'
import { Container } from 'react-bootstrap'
import parsePolishDate from '../../utils/parsePolishDate'
import { FaArrowRight } from 'react-icons/fa'

export default function GalleryGrid() {
    const sortedGalleries = [...galleries].sort((a, b) => {
        if (!a.date) return 1
        if (!b.date) return -1
        return parsePolishDate(b.date) - parsePolishDate(a.date)
    })

    return (
        <Container>
            <section className={layout.section}>
                <h1 className={layout.heading}>Galeria wydarzeń</h1>

                <div className={layout.grid}>
                    {sortedGalleries.map((event) => (
                        <Link key={event.slug} href={`/galeria/${event.slug}`} className={styles.card}>
                            <div className={styles.imageContainer}>
                                <Image
                                    src={event.cover}
                                    alt={event.title}
                                    fill
                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                                    style={{ objectFit: 'cover' }}
                                />
                                <div className={styles.overlay}>
                                    {event.date && <span className={styles.date}>{event.date}</span>}
                                    {event.type && <span className={styles.type}>{event.type}</span>}
                                </div>
                            </div>
                            <div className={styles.content}>
                                <h3 className={styles.cardTitle}>{event.title}</h3>
                                <div className={styles.viewMore}>
                                    Zobacz więcej
                                    <FaArrowRight />
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>
        </Container>
    )
}
