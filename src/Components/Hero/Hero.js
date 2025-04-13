import styles from './Hero.module.css'
import mainImage from '../../assets/images/zakonnica.jpg'

export default function Hero() {
    return (
        <section className={styles.hero}>
            <img src={mainImage.src} alt="Teatr Movimento" className={styles.image} />
            <div className={styles.overlay}>
                <div className={styles.text}>
                    <h1>Czechowicki Teatr Muzyczny Movimento</h1>
                    <p>Muzyka. Sztuka. Pasja.</p>
                </div>
            </div>
        </section>
    )
}
