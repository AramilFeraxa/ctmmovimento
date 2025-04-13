import { Container } from 'react-bootstrap'
import styles from './About.module.css'
import aboutImage from '../../assets/images/main.jpeg'

export default function About() {
    return (
        <Container>
            <section className={styles.about}>
                <div className={styles.text}>
                    <h2>O Teatrze</h2>
                    <p>
                        Czechowicki Teatr Muzyczny Movimento to pasja, muzyka i emocje zamknięte w światłach sceny. Od lat tworzymy wyjątkowe spektakle, angażując utalentowanych artystów z regionu. Nasza scena tętni życiem, a każda premiera to święto dla widzów.
                    </p>
                </div>
                <img src={aboutImage.src} className={styles.image} />
            </section>
        </Container>
    )
}
