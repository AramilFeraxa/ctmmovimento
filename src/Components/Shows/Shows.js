import styles from './Shows.module.css'
import { Container } from 'react-bootstrap'
import { events } from '../../data/events'
import ShowCard from './ShowCard'
import Link from 'next/link'

export default function Shows() {
    const shows = events
        .filter(e => new Date(e.date) > new Date())
        .sort((a, b) => new Date(a.date) - new Date(b.date))

    return (
        <Container>
            <section className={styles.shows}>
                <h1>Nadchodzące wydarzenia</h1>
                <div className={styles.grid}>
                    {shows.map((show, i) => (
                        <ShowCard key={i} show={show} />
                    ))}
                </div>
                {shows.length === 0 && <p><i>Brak nadchodzących wydarzeń.</i></p>}
                <Link href="/kalendarz" className="button" style={{ marginTop: '20px' }}>Zobacz wszystkie</Link>
            </section>
        </Container>
    )
}
