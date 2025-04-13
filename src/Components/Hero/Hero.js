import styles from './Hero.module.css'

export default function Hero() {
    return (
        <section className={styles.hero}>
            <div className={styles.text}>
                <h1>Czechowicki Teatr Muzyczny Movimento</h1>
                <p>Pasja. Muzyka. Teatr.</p>
            </div>
        </section>
    )
}
