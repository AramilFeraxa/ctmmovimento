import Link from "next/link";
import Image from "next/image";
import styles from "./Footer.module.css";
import logo from "../../assets/images/movimento_White.png";
import {
    FaFacebookF,
    FaInstagram,
    FaYoutube,
    FaEnvelope,
    FaPhone,
    FaMapMarkerAlt,
    FaHeart,
    FaTiktok
} from "react-icons/fa";

export default function Footer() {
    const socialMedia = [
        {
            name: "Facebook",
            icon: <FaFacebookF />,
            url: "https://facebook.com/TeatrMuzycznyMovimento",
        },
        {
            name: "Instagram",
            icon: <FaInstagram />,
            url: "https://instagram.com/ctmmovimento",
        },
        {
            name: "YouTube",
            icon: <FaYoutube />,
            url: "https://www.youtube.com/@teatrmuzycznymovimento2269",
        },
        {
            name: "TikTok",
            icon: <FaTiktok />,
            url: "https://www.tiktok.com/@ctm.movimento",
        }
    ];

    const contactInfo = [
        {
            icon: <FaEnvelope />,
            label: "Email",
            value: "kontakt@ctmmovimento.pl",
            link: "mailto:kontakt@ctmmovimento.pl",
        },
        {
            icon: <FaPhone />,
            label: "Telefon",
            value: "32 215 32 85",
            link: "tel:+48322153285",
        },
        {
            icon: <FaMapMarkerAlt />,
            label: "Adres",
            value: "MDK Czechowice-Dziedzice, ul. Niepodległości 42, 43-502 Czechowice-Dziedzice",
            link: "https://maps.google.com/?q=MDK+Czechowice-Dziedzice",
        },
    ];

    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.brand}>
                        <Link href="/" className={styles.logo}>
                            <Image src={logo} alt="CTM Movimento" width={150} height={60} />
                        </Link>
                        <p className={styles.tagline}>
                            Czechowicki Teatr Muzyczny Movimento - Pasja do sztuki od 2005 roku
                        </p>
                        <div className={styles.social}>
                            {socialMedia.map((social) => (
                                <a
                                    key={social.name}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={styles.socialLink}
                                    aria-label={social.name}
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className={styles.contact}>
                        <h3 className={styles.contactTitle}>Kontakt</h3>
                        <ul className={styles.contactList}>
                            {contactInfo.map((item, index) => (
                                <li key={index}>
                                    <a
                                        href={item.link}
                                        target={item.link.startsWith("http") ? "_blank" : undefined}
                                        rel={
                                            item.link.startsWith("http")
                                                ? "noopener noreferrer"
                                                : undefined
                                        }
                                        className={styles.contactItem}
                                    >
                                        <span className={styles.contactIcon}>{item.icon}</span>
                                        <span className={styles.contactText}>
                                            <span className={styles.contactLabel}>{item.label}</span>
                                            <span className={styles.contactValue}>{item.value}</span>
                                        </span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className={styles.bottom}>
                    <p className={styles.copyright}>
                        © {new Date().getFullYear()} CTM Movimento. Wszystkie prawa
                        zastrzeżone.
                    </p>
                    <p className={styles.credits}>
                        Mateusz Kopeć
                    </p>
                </div>
            </div>
            <div className={styles.decoration}></div>
        </footer>
    );
}