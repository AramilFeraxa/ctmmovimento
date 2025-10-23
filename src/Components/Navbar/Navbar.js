import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import styles from "./Navbar.module.css";
import { navbarData } from "@/data/navbar";
import logo from "../../assets/images/movimento_black.png";
import { FaChevronDown } from "react-icons/fa";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);
    const router = useRouter();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        setIsOpen(false);
        setActiveDropdown(null);
    }, [router.pathname]);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);

    const isActive = (path) => {
        if (path === "/") {
            return router.pathname === "/";
        }
        return router.pathname.startsWith(path);
    };

    const toggleDropdown = (index) => {
        setActiveDropdown(activeDropdown === index ? null : index);
    };

    return (
        <>
            <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
                <div className={styles.container}>
                    <Link href="/" className={styles.logo}>
                        <span className={styles.logoImage}>
                            <Image src={logo} alt="CTM Movimento Logo" width={150} height={60} />
                        </span>
                    </Link>

                    <ul className={styles.navLinks}>
                        {navbarData?.map((item, index) => (
                            <li
                                key={index}
                                className={styles.navItem}
                                onMouseEnter={() => item.submenu && setActiveDropdown(index)}
                                onMouseLeave={() => item.submenu && setActiveDropdown(null)}
                            >
                                {item.submenu ? (
                                    <>
                                        <button
                                            className={`${styles.navLink} ${isActive(item.path) ? styles.active : ""
                                                }`}
                                        >
                                            {item.name}
                                            <FaChevronDown
                                                className={`${styles.chevron} ${activeDropdown === index ? styles.chevronOpen : ""
                                                    }`}
                                            />
                                        </button>
                                        <ul
                                            className={`${styles.dropdown} ${activeDropdown === index ? styles.dropdownOpen : ""
                                                }`}
                                        >
                                            {item.submenu.map((subItem, subIndex) => (
                                                <li key={subIndex}>
                                                    <Link
                                                        href={subItem.path}
                                                        className={`${styles.dropdownLink} ${isActive(subItem.path) ? styles.active : ""
                                                            }`}
                                                    >
                                                        {subItem.name}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </>
                                ) : (
                                    <Link
                                        href={item.path}
                                        className={`${styles.navLink} ${isActive(item.path) ? styles.active : ""
                                            }`}
                                    >
                                        {item.name}
                                    </Link>
                                )}
                            </li>
                        ))}
                    </ul>

                    <button
                        className={`${styles.menuButton} ${isOpen ? styles.menuOpen : ""}`}
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle menu"
                        aria-expanded={isOpen}
                    >
                        <span className={styles.menuLine}></span>
                        <span className={styles.menuLine}></span>
                        <span className={styles.menuLine}></span>
                    </button>
                </div>
            </nav>

            <div className={`${styles.mobileMenu} ${isOpen ? styles.mobileMenuOpen : ""}`}>
                <div className={styles.mobileMenuContent}>
                    <ul className={styles.mobileNavLinks}>
                        {navbarData?.map((item, index) => (
                            <li key={index} className={styles.mobileNavItem}>
                                {item.submenu ? (
                                    <>
                                        <button
                                            className={`${styles.mobileNavLink} ${isActive(item.path) ? styles.active : ""
                                                }`}
                                            onClick={() => toggleDropdown(index)}
                                        >
                                            {item.name}
                                            <FaChevronDown
                                                className={`${styles.chevron} ${activeDropdown === index ? styles.chevronOpen : ""
                                                    }`}
                                            />
                                        </button>
                                        <ul
                                            className={`${styles.mobileDropdown} ${activeDropdown === index ? styles.mobileDropdownOpen : ""
                                                }`}
                                        >
                                            {item.submenu.map((subItem, subIndex) => (
                                                <li key={subIndex}>
                                                    <Link
                                                        href={subItem.path}
                                                        className={`${styles.mobileDropdownLink} ${isActive(subItem.path) ? styles.active : ""
                                                            }`}
                                                    >
                                                        {subItem.name}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </>
                                ) : (
                                    <Link
                                        href={item.path}
                                        className={`${styles.mobileNavLink} ${isActive(item.path) ? styles.active : ""
                                            }`}
                                    >
                                        {item.name}
                                    </Link>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {isOpen && (
                <div
                    className={styles.overlay}
                    onClick={() => setIsOpen(false)}
                    aria-hidden="true"
                />
            )}
        </>
    );
}