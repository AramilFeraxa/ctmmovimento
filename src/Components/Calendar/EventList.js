import styles from './EventList.module.css'
import ShowCard from '../Shows/ShowCard'

export default function EventList({ events, filter = 'all' }) {
    const now = new Date()

    const upcoming = events
        .filter(e => new Date(e.date) >= now)
        .sort((a, b) => new Date(a.date) - new Date(b.date))

    const past = events
        .filter(e => new Date(e.date) < now)
        .sort((a, b) => new Date(b.date) - new Date(a.date))

    return (
        <div className={styles.wrapper}>
            {(filter === 'all' || filter === 'future') && (
                <section>
                    <h2>Nadchodzące wydarzenia</h2>
                    <div className={styles.grid}>
                        {upcoming.length
                            ? upcoming.map((e, i) => <ShowCard key={i} show={e} />)
                            : <p><i>Brak nadchodzących wydarzeń.</i></p>}
                    </div>
                </section>
            )}

            {(filter === 'all' || filter === 'past') && (
                <section>
                    <h2>Archiwalne wydarzenia</h2>
                    <div className={styles.grid}>
                        {past.length
                            ? past.map((e, i) => <ShowCard key={i} show={e} />)
                            : <p><i>Brak archiwalnych wydarzeń.</i></p>}
                    </div>
                </section>
            )}
        </div>
    )
}
