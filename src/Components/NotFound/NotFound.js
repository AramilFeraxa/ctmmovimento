import Link from 'next/link'
import styles from '../../assets/styles/NotFound.module.css'
import Layout from '../Layout/Layout'
import { FaHome, FaTheaterMasks, FaArrowRight } from 'react-icons/fa'

export default function NotFoundPage() {
    return (
        <Layout>
            <div className={styles.wrapper}>
                <div className={styles.content}>
                    <div className={styles.iconWrapper}>
                        <div className={styles.iconCircle}>
                            <FaTheaterMasks className={styles.icon} />
                        </div>
                    </div>

                    <div className={styles.errorCode}>
                        <span>4</span>
                        <span className={styles.mask}>0</span>
                        <span>4</span>
                    </div>

                    <h1 className={styles.title}>Ups! Zgubiłeś się</h1>
                    <p className={styles.description}>
                        Strona, której szukasz, nie istnieje. Być może została przeniesiona lub usunięta.
                    </p>

                    <div className={styles.suggestions}>
                        <h3 className={styles.suggestionsTitle}>Co możesz zrobić?</h3>
                        <ul className={styles.suggestionsList}>
                            <li>Sprawdź, czy adres URL jest poprawny</li>
                            <li>Użyj menu nawigacji, aby znaleźć to, czego szukasz</li>
                            <li>Wróć do strony głównej</li>
                        </ul>
                    </div>

                    <div className={styles.actions}>
                        <Link href="/" className={styles.homeButton}>
                            <FaHome />
                            Wróć do strony głównej
                        </Link>
                    </div>
                </div>
            </div>
        </Layout>
    )
}