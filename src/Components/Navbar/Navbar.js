import { useState, useEffect } from 'react'
import Link from 'next/link'
import styles from './Navbar.module.css'
import movimentoWhite from '../../assets/images/movimento_White.png'

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const toggleMenu = () => {
        setMenuOpen(!menuOpen)
    }

    const closeMenu = () => {
        setMenuOpen(false)
    }

    return (
        <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
            <Link href='/' onClick={closeMenu}>
                <img src={movimentoWhite.src} className={styles.logo} alt="Logo Movimento" />
            </Link>

            <button className={styles.hamburger} onClick={toggleMenu} aria-label="Menu">
                ☰
            </button>

            <div className={`${styles.links} ${menuOpen ? styles.menuOpen : ''}`}>
                <Link href="/" onClick={closeMenu}>Strona Główna</Link>
                <Link href="/spektakle" onClick={closeMenu}>Spektakle</Link>
                <Link href="/kontakt" onClick={closeMenu}>Kontakt</Link>
            </div>
        </nav>
    )
}
