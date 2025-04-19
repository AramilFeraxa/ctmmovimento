import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from './Navbar.module.css'
import movimentoWhite from '../../assets/images/movimento_White.png'
import { navigationLinks } from '../../data/navbar'

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)
    const [openSubmenuIndex, setOpenSubmenuIndex] = useState(null)
    const [isMobile, setIsMobile] = useState(false)
    const navRef = useRef(null)
    const router = useRouter()

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 768)
        handleResize()
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (!navRef.current?.contains(e.target)) {
                setMenuOpen(false)
                setOpenSubmenuIndex(null)
            }
        }
        document.addEventListener('mousedown', handleClickOutside)
        return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [])

    const toggleMenu = () => setMenuOpen((prev) => !prev)
    const closeMenu = () => {
        setMenuOpen(false)
        setOpenSubmenuIndex(null)
    }

    const isActive = (path) =>
        path === '/'
            ? router.pathname === '/'
                ? styles.active
                : ''
            : router.pathname.startsWith(path)
                ? styles.active
                : ''

    return (
        <nav ref={navRef} className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
            <div style={{ marginLeft: '10%', marginRight: '10%' }}>
                <Link href="/" onClick={closeMenu}>
                    <img src={movimentoWhite.src} className={styles.logo} alt="Logo Movimento" />
                </Link>
            </div>

            <button
                className={`${styles.hamburger} ${menuOpen ? styles.open : ''}`}
                onClick={toggleMenu}
                aria-label="Menu"
            >
                <span></span>
                <span></span>
                <span></span>
            </button>

            <div className={`${styles.links} ${menuOpen ? styles.menuOpen : ''}`}>
                {navigationLinks.map((link, i) => {
                    const isOpen = openSubmenuIndex === i
                    const hasSubitems = !!link.subitems

                    return (
                        <div
                            key={i}
                            className={`${styles.linkGroup} ${isMobile && isOpen ? styles.menuOpen : ''}`}
                        >
                            <div className={styles.linkWithArrow}>
                                <Link
                                    href={link.href}
                                    className={`${styles.link} ${isActive(link.href)}`}
                                    onClick={closeMenu}
                                >
                                    {link.label}
                                </Link>
                                {hasSubitems && isMobile && (
                                    <button
                                        type="button"
                                        className={`${styles.arrowButton} ${isOpen ? styles.open : ''}`}
                                        onClick={(e) => {
                                            e.preventDefault()
                                            e.stopPropagation()
                                            setOpenSubmenuIndex(isOpen ? null : i)
                                        }}
                                    >
                                        ▼
                                    </button>
                                )}
                            </div>

                            {hasSubitems && (
                                <div className={styles.submenu}>
                                    {link.subitems.map((sub, j) => (
                                        <Link
                                            key={j}
                                            href={sub.href}
                                            className={styles.subLink}
                                            onClick={closeMenu}
                                        >
                                            {sub.label}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>
                    )
                })}
            </div>
        </nav>
    )
}
