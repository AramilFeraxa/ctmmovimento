import Link from 'next/link'
import shared from './GalleryShared.module.css'
import layout from './GalleryGrid.module.css'
import { galleries } from '../../data/galleries'
import { Container } from 'react-bootstrap'
import parsePolishDate from '../../utils/parsePolishDate'

export default function GalleryGrid() {
    const sortedGalleries = [...galleries].sort((a, b) => {
        if (!a.date) return 1
        if (!b.date) return -1
        return parsePolishDate(a.date) - parsePolishDate(b.date)
    })

    return (
        <Container>
            <section className={shared.gallery}>
                <h1>Galeria wydarzeń</h1>
                <div className={layout.grid}>
                    {sortedGalleries.map(event => (
                        <Link key={event.slug} href={`/galeria/${event.slug}`} className={shared.card}>
                            <div className={shared.overlay}>
                                <img src={event.cover} alt={event.title} />
                                {event.date && <p className={shared.date}>{event.date}</p>}
                            </div>
                            <p className={shared.title}>{event.title}</p>
                            <p className={shared.type}>{event?.type}</p>
                        </Link>
                    ))}
                </div>
            </section>
        </Container>
    )
}
