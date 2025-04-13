import Link from 'next/link'
import styles from './Gallery.module.css'
import exampleImage from '../../assets/images/example.jpg'
import { galleries } from '../../data/galleries'

export default function GalleryGrid() {
    return (
        <section className={styles.gallery}>
            <h1>Galeria wydarzeń</h1>
            <div className={styles.grid}>
                {galleries.map(event => (
                    <Link key={event.slug} href={`/galeria/${event.slug}`} className={styles.card}>
                        <img src={event.cover} alt={event.title} />
                        <p>{event.title}</p>
                    </Link>
                ))}
            </div>
        </section>
    )
}
