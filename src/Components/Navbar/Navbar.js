import { useEffect, useState } from 'react'
import Link from 'next/link'
import styles from './Navbar.module.css'
import movimentoWhite from '@/images/movimento_white.png'

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
            <Link href='/'><img src={movimentoWhite.src} className={styles.logo} /></Link>
            <div className={styles.links}>
                <Link href="/">Strona Główna</Link>
                <Link href="/spektakle">Spektakle</Link>
                <Link href="/kontakt">Kontakt</Link>
            </div>
        </nav>
    )
}
