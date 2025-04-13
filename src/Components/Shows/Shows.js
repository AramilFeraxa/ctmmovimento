import styles from './Shows.module.css'
import { Container } from 'react-bootstrap'
import plakatUniversal from '../../assets/images/plakaty/plakat_universal.png'
import plakatKoncert from '../../assets/images/plakaty/plakat_koncert.png'
import plakatZakonnica from '../../assets/images/plakaty/plakat_zakonnica.jpg'

export default function Shows() {
    const shows = [
        { title: 'Zakonnica w przebraniu', date: '16 marca 2025', desc: 'Komedia o miłości i tajemnicach klasztoru.', poster: plakatZakonnica.src, category: 'spektakl' },
        { title: 'Koncert muzyki filmowej', date: '25 maja 2025', desc: 'Niezapomniane melodie z ulubionych filmów.', poster: plakatKoncert.src, category: 'koncert' },
        { title: 'Upiór w operze', date: '9 sierpnia 2025', desc: 'Mroczna opowieść o miłości i zemście w operze paryskiej.', poster: plakatUniversal.src, category: 'spektakl' },
    ]

    return (
        <Container>
            <section className={styles.shows}>
                <h1>Nadchodzące wydarzenia</h1>
                <div className={styles.grid}>
                    {shows.map((show, i) => (
                        <div key={i} className={styles.card}>
                            <img src={show.poster || plakatUniversal.src} alt={show.title} className={styles.poster} />
                            <h3>{show.title}</h3>
                            <span className={styles.category}>{show.category}</span>
                            <p><strong>{show.date}</strong></p>
                            <p>{show.desc}</p>
                        </div>
                    ))}
                </div>
            </section>
        </Container>
    )
}
