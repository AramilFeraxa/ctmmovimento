import styles from './PageHeader.module.css'
import { FaStar } from 'react-icons/fa'

export default function PageHeader({ title, subtitle, backgroundImage }) {
    return (
        <section className={styles.hero}>
            <div className={styles.heroOverlay}></div>
            <div className={styles.container}>
                <div className={styles.heroContent}>
                    <span className={styles.badge}>
                        <FaStar />
                        {title}
                    </span>
                    <h1 className={styles.heroTitle}>
                        Czechowicki Teatr Muzyczny
                        <span className={styles.heroTitleAccent}> Movimento</span>
                    </h1>
                    <p className={styles.heroSubtitle}>
                        {subtitle}
                    </p>
                </div>
            </div>
        </section>
    )
}
