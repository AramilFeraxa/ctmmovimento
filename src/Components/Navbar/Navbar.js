import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import styles from './Navbar.module.css'
import movimentoWhite from '../../assets/images/movimento_White.png'
import { Container } from 'react-bootstrap'

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

    const isActive = (path) => {
        const router = useRouter()
        if (path === '/') {
            console.log(router.pathname)
            return router.pathname === path ? styles.active : ''
        }

        return router.pathname.startsWith(path) ? styles.active : ''
    }

    return (
        <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
            <Link href='/' onClick={closeMenu}>
                <img src={movimentoWhite.src} className={styles.logo} alt="Logo Movimento" />
            </Link>

            <button className={styles.hamburger} onClick={toggleMenu} aria-label="Menu">
                ☰
            </button>
            <Container>
                <div className={`${styles.links} ${menuOpen ? styles.menuOpen : ''}`}>
                    <Link href="/" className={isActive('/')} onClick={closeMenu}>Strona Główna</Link>
                    <Link href="/galeria" className={isActive('/galeria')} onClick={closeMenu}>Galeria</Link>
                    <Link href="/o-nas" className={isActive('/o-nas')} onClick={closeMenu}>O nas</Link>
                </div>
            </Container>
        </nav>
    )
}
