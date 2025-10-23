import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./AboutPage.module.css";
import ctmImage from "../../assets/images/movimento.jpeg";
import bambiniImage from "../../assets/images/grupa_dziecieca.jpg";
import plusImage from "../../assets/images/movimento_plus.jpg";
import {
    FaTheaterMasks,
    FaUsers,
    FaMusic,
    FaTrophy,
    FaChild,
    FaMicrophone,
    FaHeart,
    FaArrowRight,
    FaCheckCircle,
    FaStar,
} from "react-icons/fa";

export default function AboutPage() {
    const stats = [
        {
            icon: <FaTheaterMasks />,
            number: "20+",
            label: "Lat działalności",
        },
        {
            icon: <FaUsers />,
            number: "40+",
            label: "Członków zespołu",
        },
        {
            icon: <FaMusic />,
            number: "50+",
            label: "Zrealizowanych spektakli",
        },
        {
            icon: <FaTrophy />,
            number: "30+",
            label: "Nagród i wyróżnień",
        },
    ];

    const features = [
        "Profesjonalne warsztaty wokalne i aktorskie",
        "Regularne występy i spektakle",
        "Przyjazna i wspierająca atmosfera",
        "Indywidualne podejście do każdego uczestnika",
        "Przygotowanie do studiów artystycznych",
        "Udział w konkursach krajowych i międzynarodowych",
    ];

    const productions = [
        "Stabat Mater - G. B. Pergolesiego",
        "Pasja Janowa - G. F. Haendla",
        "West Side Story - L. Bernsteina",
        "My Fair Lady - A. J. Lernera",
        "Kiss Me, Kate - Cole'a Portera",
        "Bastien i Bastienne - W. A. Mozarta",
        "Zakonnica w przebraniu",
        "Skrzypek na dachu - J. Bocka",
        "Napój miłosny - G. Donizettiego",
        "Kraina Uśmiechu - F. Lehára",
        "Księżniczka czardasza - I. Kálmána",
        "Rodzina Addamsów - A. Lippa",
        "Babcia i wnuczek, czyli noc cudów - K.I. Gałczyńskiego",
    ];

    return (
        <div className={styles.aboutPage}>
            <div className={styles.container}>
                <section className={styles.statsSection}>
                    <div className={styles.statsGrid}>
                        {stats.map((stat, index) => (
                            <div key={index} className={styles.statCard}>
                                <div className={styles.statIcon}>{stat.icon}</div>
                                <div className={styles.statNumber}>{stat.number}</div>
                                <div className={styles.statLabel}>{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </section>

                <section className={styles.section}>
                    <div className={styles.sectionContent}>
                        <div className={styles.imageWrapper}>
                            <Image
                                src={ctmImage}
                                alt="CTM Movimento"
                                fill
                                sizes="(max-width: 768px) 100vw, 50vw"
                                style={{ objectFit: "cover" }}
                            />
                            <div className={styles.imageOverlay}></div>
                        </div>
                        <div className={styles.textContent}>
                            <h2 className={styles.sectionTitle}>
                                CTM <span className={styles.accent}>Movimento</span>
                            </h2>
                            <p className={styles.paragraph}>
                                Czechowicki Teatr Muzyczny „Movimento" to wielopokoleniowa grupa
                                artystyczna, działająca od 2005 roku przy Miejskim Domu Kultury w
                                Czechowicach-Dziedzicach. Założony przez Barbarę Bielaczyc, teatr
                                ten łączy pasję do muzyki i teatru z profesjonalnym przygotowaniem
                                wokalnym i aktorskim.
                            </p>
                            <p className={styles.paragraph}>
                                W skład zespołu wchodzi około 40 osób w wieku od 10 do 24 lat,
                                którzy regularnie występują w spektaklach musicalowych, operowych,
                                operetkowych oraz koncertach o szerokim repertuarze.
                            </p>
                            <p className={styles.paragraph}>
                                Celem Teatru jest nie tylko rozwój artystyczny jego członków, ale
                                także przygotowanie ich do studiów artystycznych — wokalnych i
                                aktorskich. Wielu członków „Movimento" odnosi sukcesy w
                                ogólnopolskich i międzynarodowych konkursach, a także z powodzeniem
                                kontynuuje karierę na scenach zawodowych teatrów dramatycznych i
                                muzycznych w Polsce i za granicą.
                            </p>
                        </div>
                    </div>
                </section>

                <section className={styles.featuresSection}>
                    <h3 className={styles.featuresTitle}>Co nas wyróżnia?</h3>
                    <div className={styles.featuresGrid}>
                        {features.map((feature, index) => (
                            <div key={index} className={styles.featureItem}>
                                <FaCheckCircle className={styles.featureIcon} />
                                <span>{feature}</span>
                            </div>
                        ))}
                    </div>
                    <div className={styles.videoWrapper}>
                        <iframe
                            src="https://www.youtube.com/embed/x62YoDsVW3M"
                            title="CTM Movimento"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className={styles.video}
                        ></iframe>
                    </div>
                </section>

                <section className={styles.productionsSection}>
                    <h3 className={styles.productionsTitle}>
                        Nasze realizacje
                    </h3>
                    <div className={styles.productionsGrid}>
                        {productions.map((production, index) => (
                            <div key={index} className={styles.productionCard}>
                                <FaMusic className={styles.productionIcon} />
                                <span>{production}</span>
                            </div>
                        ))}
                    </div>
                </section>

                <section className={styles.section}>
                    <div className={styles.sectionContent}>
                        <div className={styles.textContent}>
                            <h2 className={styles.sectionTitle}>
                                <FaChild className={styles.titleIcon} />
                                Movimento <span className={styles.accent}>Bambini</span>
                            </h2>
                            <p className={styles.paragraph}>
                                Grupa dziecięca CTM Movimento to najmłodsi artyści. W jej skład
                                wchodzą dzieci w wieku do 13 lat. Zajęcia odbywają się w dwóch
                                grupach wiekowych: młodszej (do 9 lat) i starszej (10-13 lat).
                            </p>
                            <p className={styles.paragraph}>
                                Program obejmuje zajęcia wokalne, ruchowe oraz teatralne, które
                                rozwijają zdolności muzyczne, kreatywność i pewność siebie
                                najmłodszych artystów pod okiem doświadczonych instruktorów. Grupa
                                dziecięca także regularnie prezentuje swoje umiejętności na scenie,
                                biorąc udział w koncertach i spektaklach.
                            </p>
                        </div>
                        <div className={styles.imageWrapper}>
                            <Image
                                src={bambiniImage}
                                alt="Movimento Bambini"
                                fill
                                sizes="(max-width: 768px) 100vw, 50vw"
                                style={{ objectFit: "cover" }}
                            />
                            <div className={styles.imageOverlay}></div>
                        </div>
                    </div>
                </section>

                <section className={styles.section}>
                    <div className={styles.sectionContent}>
                        <div className={styles.imageWrapper}>
                            <Image
                                src={plusImage}
                                alt="Movimento Plus"
                                fill
                                sizes="(max-width: 768px) 100vw, 50vw"
                                style={{ objectFit: "cover" }}
                            />
                            <div className={styles.imageOverlay}></div>
                        </div>
                        <div className={styles.textContent}>
                            <h2 className={styles.sectionTitle}>
                                <FaHeart className={styles.titleIcon} />
                                Movimento <span className={styles.accent}>Plus</span>
                            </h2>
                            <p className={styles.paragraph}>
                                „Movimento Plus" to grupa skierowana do osób powyżej 30. roku
                                życia, które pragną rozwijać swoje pasje muzyczne i aktorskie.
                                Grupa ta oferuje możliwość nauki śpiewu, dykcji oraz gry aktorskiej,
                                a także udziału w projektach artystycznych i koncertach u boku
                                głównego zespołu.
                            </p>
                            <p className={styles.paragraph}>
                                To doskonałe miejsce dla osób, które mimo wieku chcą zrealizować
                                swoje marzenia sceniczne i dołączyć do artystycznej społeczności.
                                Opiekę nad Movimento Plus sprawuje prof. Rafał Majzner.
                            </p>
                        </div>
                    </div>
                </section>

                <section className={styles.ctaSection}>
                    <div className={styles.ctaContent}>
                        <FaMicrophone className={styles.ctaIcon} />
                        <h2 className={styles.ctaTitle}>
                            Gotowy, aby dołączyć do nas?
                        </h2>
                        <p className={styles.ctaText}>
                            Niezależnie od wieku i doświadczenia - znajdziesz u nas swoje miejsce!
                        </p>
                        <Link href="/o-nas/dolacz" className={styles.ctaButton}>
                            Dołącz do nas
                            <FaArrowRight />
                        </Link>
                    </div>
                </section>
            </div>
        </div>
    );
}