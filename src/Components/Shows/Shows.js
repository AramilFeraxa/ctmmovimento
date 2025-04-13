import styles from './Shows.module.css'
import { Container } from 'react-bootstrap'

export default function Shows() {
    const shows = [
        { title: 'Romeo i Julia', date: '25 kwietnia 2025', desc: 'Nowa interpretacja klasycznej historii miłosnej.' },
        { title: 'W rytmie serca', date: '10 maja 2025', desc: 'Musical o emocjach, dźwiękach i marzeniach.' },
        { title: 'Człowiek z La Manchy', date: '22 czerwca 2025', desc: 'Spektakl o sile wyobraźni i nieugiętości ducha.' },
    ]

    return (
        <Container>
            <section className={styles.shows}>
                <h2>Nadchodzące spektakle</h2>
                <div className={styles.grid}>
                    {shows.map((show, i) => (
                        <div key={i} className={styles.card}>
                            <h3>{show.title}</h3>
                            <p><strong>{show.date}</strong></p>
                            <p>{show.desc}</p>
                        </div>
                    ))}
                </div>
            </section>
        </Container>
    )
}
