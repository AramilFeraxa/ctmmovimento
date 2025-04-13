import { Container } from 'react-bootstrap'
import styles from './About.module.css'
import aboutImage from '../../assets/images/main.jpg'
import Link from 'next/link'

export default function About() {
    return (
        <Container>
            <section className={styles.about}>
                <div className={styles.text}>
                    <h2>O nas</h2>
                    <p>
                        Czechowicki Teatr Muzyczny Movimento działa przy Miejskim Domu Kultury w Czechowicach Dziedzicach. Od 2005 roku kształci młodych aktorów i wokalistów: zajmuje się amatorską działalnością wokalno-teatralną, ale także przygotowuje młodzież na studia artystyczno-wokalne oraz aktorskie. Od lat wystawia spektakle dramatyczne, musicalowe, operowe oraz wykonuje liczne koncerty z szerokim repertuarem.
                    </p>
                    <Link href='/o-nas' className="button">Czytaj więcej</Link>
                </div>
                <img src={aboutImage.src} className={styles.image} />
            </section>
        </Container>
    )
}
