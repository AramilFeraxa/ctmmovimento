import styles from './Hero.module.css'
import mainImage from '@/images/main.jpeg'

export default function Hero() {
    return (
        <section className={styles.hero}>
            <img src={mainImage.src} alt="Teatr Movimento" className={styles.image} />
            <div className={styles.overlay}>
                <div className={styles.text}>
                    <h1>Czechowicki Teatr Muzyczny Movimento</h1>
                    <p>Pasja. Muzyka. Teatr.</p>
                </div>
            </div>
        </section>
    )
}
