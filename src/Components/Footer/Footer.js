import styles from './Footer.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <p>&copy; {new Date().getFullYear()} Movimento – Czechowicki Teatr Muzyczny</p>

            <div className={styles.socials}>
                <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={['fab', 'facebook-f']} />
                </Link>
                <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={['fab', 'instagram']} />
                </Link>
                <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={['fab', 'tiktok']} />
                </Link>
            </div>
        </footer>
    )
}
