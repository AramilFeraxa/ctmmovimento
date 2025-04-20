import styles from './Footer.module.css'
import Link from 'next/link'

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <p>&copy; {new Date().getFullYear()} CTM Movimento</p>

            <div className={styles.socials}>
                <Link href="https://www.facebook.com/TeatrMuzycznyMovimento" target="_blank" rel="noopener noreferrer">
                    <i className="fa-brands fa-facebook" />
                </Link>
                <Link href="https://www.instagram.com/ctmmovimento/" target="_blank" rel="noopener noreferrer">
                    <i className="fa-brands fa-instagram" />
                </Link>
                <Link href="https://www.tiktok.com/@ctm.movimento" target="_blank" rel="noopener noreferrer">
                    <i className="fa-brands fa-tiktok" />
                </Link>
            </div>
        </footer>
    )
}
