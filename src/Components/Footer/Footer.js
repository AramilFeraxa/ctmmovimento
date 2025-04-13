import styles from './Footer.module.css'
import Link from 'next/link'

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <p>&copy; {new Date().getFullYear()} CTM Movimento</p>

            <div className={styles.socials}>
                <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                    <i className="fa-brands fa-facebook" />
                </Link>
                <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                    <i className="fa-brands fa-instagram" />
                </Link>
                <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                    <i className="fa-brands fa-twitter" />
                </Link>
            </div>
        </footer>
    )
}
