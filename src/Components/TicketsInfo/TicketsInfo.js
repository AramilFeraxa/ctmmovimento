import styles from './TicketsInfo.module.css'

export default function TicketsInfo() {
    return (
        <section className={styles.wrapper}>
            <div className={styles.container}>
                <p>
                    Bilety na wydarzenia CTM Movimento dostępne są w serwisie <strong>Biletyna</strong>.
                </p>
                <a
                    href="https://biletyna.pl/tag/Teatr-Muzyczny-Movimento"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button button-yellow"
                >
                    <i className="fa-solid fa-ticket" /> Sprawdź dostępność
                </a>
            </div>
        </section>
    )
}
