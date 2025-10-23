import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./JoinUs.module.css";
import img1 from "../../assets/images/joinus1.jpg";
import img2 from "../../assets/images/joinus2.jpg";
import img3 from "../../assets/images/joinus3.jpg";
import img4 from "../../assets/images/joinus4.jpg";
import img5 from "../../assets/images/joinus5.jpg";
import {
    FaTheaterMasks,
    FaMicrophone,
    FaUsers,
    FaStar,
    FaChild,
    FaMusic,
    FaGuitar,
    FaUserGraduate,
    FaPhone,
    FaArrowRight,
    FaCheckCircle,
    FaQuoteLeft,
} from "react-icons/fa";

export default function JoinUs() {
    const groups = [
        {
            icon: <FaChild />,
            title: "Movimento Bambini",
            description: "Dla dzieci - rozwijamy młode talenty",
            age: "do 13 lat",
        },
        {
            icon: <FaTheaterMasks />,
            title: "Movimento",
            description: "Dla młodzieży i studentów - główny zespół",
            age: "14-24 lata",
        },
        {
            icon: <FaUsers />,
            title: "Movimento Plus",
            description: "Dla dorosłych i seniorów - nigdy nie jest za późno",
            age: "30+ lat",
        },
    ];

    const benefits = [
        {
            icon: <FaTheaterMasks />,
            title: "Warsztaty teatralne",
            description: "Nauka aktorstwa i gry scenicznej",
        },
        {
            icon: <FaMicrophone />,
            title: "Zajęcia wokalne",
            description: "Rozwój umiejętności śpiewu",
        },
        {
            icon: <FaStar />,
            title: "Występy na scenie",
            description: "Regularne spektakle i koncerty",
        },
        {
            icon: <FaUsers />,
            title: "Wspaniała społeczność",
            description: "Przyjazna atmosfera i nowi znajomi",
        },
    ];

    const classes = [
        {
            icon: <FaMicrophone />,
            title: "Śpiew",
            description:
                "Klasyczny, estradowy, jazzowy, piosenka aktorska (indywidualne)",
        },
        {
            icon: <FaGuitar />,
            title: "Dykcja i recytacja",
            description: "Praca nad wymową i ekspresją (indywidualne)",
        },
        {
            icon: <FaTheaterMasks />,
            title: "Gra aktorska",
            description: "Podstawy aktorstwa i improwizacji (grupowe)",
        },
        {
            icon: <FaMusic />,
            title: "Umuzykalniające",
            description: "Teoria muzyki i rytmika (grupowe)",
        },
        {
            icon: <FaUsers />,
            title: "Chór i zespoły",
            description: "Śpiew zespołowy i harmonia",
        },
        {
            icon: <FaUserGraduate />,
            title: "Przygotowanie do szkół",
            description: "Dla planujących studia artystyczne",
        },
    ];

    return (
        <div className={styles.joinUs}>
            <div className={styles.container}>
                <section className={styles.quoteSection}>
                    <div className={styles.quoteContent}>
                        <div className={styles.videoWrapper}>
                            <iframe
                                src="https://www.youtube.com/embed/ZwMupm29ksA"
                                title="CTM Movimento"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                className={styles.video}
                            ></iframe>
                        </div>
                        <div className={styles.quoteWrapper}>
                            <FaQuoteLeft className={styles.quoteIcon} />
                            <blockquote className={styles.quote}>
                                <p>
                                    Chcesz śpiewać w chórze? Niech cię słyszą w górze!<br />
                                    Ufaj naturze, daj się ponieść jej.<br />
                                    Jeśli w duszy nagle wszystko się układa w rytm,<br />
                                    nie bądź egoistą i głośno podziel się tym!<br />
                                    Niech twój głos wzniesie się do nieba,<br />
                                    pokaż głos – przecież to nie wstyd!<br />
                                    Pokaż moc, pokaż styl, pokaż głos!
                                </p>
                            </blockquote>
                        </div>
                    </div>
                </section>

                <section className={styles.introSection}>
                    <div className={styles.introText}>
                        <p className={styles.introParagraph}>
                            Marzysz o scenie? Uwielbiasz śpiewać, tańczyć lub grać w teatrze?
                            Niezależnie od wieku – CTM Movimento czeka właśnie na Ciebie!
                        </p>
                    </div>
                    <div className={styles.introImages}>
                        <div className={styles.introImage}>
                            <Image
                                src={img1}
                                alt="CTM Movimento"
                                fill
                                sizes="(max-width: 768px) 100vw, 50vw"
                                style={{ objectFit: "cover" }}
                            />
                        </div>
                        <div className={styles.introImage}>
                            <Image
                                src={img2}
                                alt="CTM Movimento"
                                fill
                                sizes="(max-width: 768px) 100vw, 50vw"
                                style={{ objectFit: "cover" }}
                            />
                        </div>
                    </div>
                </section>

                <section className={styles.groupsSection}>
                    <h2 className={styles.sectionTitle}>
                        Dla <span className={styles.accent}>kogo?</span>
                    </h2>
                    <p className={styles.sectionSubtitle}>
                        Nasze grupy są otwarte dla wszystkich, którzy kochają sztukę. Nie
                        musisz mieć doświadczenia – liczy się pasja i chęć tworzenia!
                    </p>
                    <div className={styles.groupsGrid}>
                        {groups.map((group, index) => (
                            <div key={index} className={styles.groupCard}>
                                <div className={styles.groupIcon}>{group.icon}</div>
                                <h3 className={styles.groupTitle}>{group.title}</h3>
                                <p className={styles.groupDescription}>{group.description}</p>
                                <span className={styles.groupAge}>{group.age}</span>
                            </div>
                        ))}
                    </div>
                    <div className={styles.groupImage}>
                        <Image
                            src={img4}
                            alt="Nasze grupy"
                            fill
                            sizes="(max-width: 768px) 100vw, 100vw"
                            style={{ objectFit: "cover" }}
                        />
                    </div>
                </section>

                <section className={styles.benefitsSection}>
                    <h2 className={styles.sectionTitle}>
                        Dlaczego <span className={styles.accent}>warto?</span>
                    </h2>
                    <div className={styles.benefitsGrid}>
                        {benefits.map((benefit, index) => (
                            <div key={index} className={styles.benefitCard}>
                                <div className={styles.benefitIcon}>{benefit.icon}</div>
                                <h3 className={styles.benefitTitle}>{benefit.title}</h3>
                                <p className={styles.benefitDescription}>
                                    {benefit.description}
                                </p>
                            </div>
                        ))}
                    </div>
                    <div className={styles.benefitImage}>
                        <Image
                            src={img5}
                            alt="Dlaczego warto"
                            fill
                            sizes="(max-width: 768px) 100vw, 100vw"
                            style={{ objectFit: "cover" }}
                        />
                    </div>
                </section>

                <section className={styles.classesSection}>
                    <h2 className={styles.sectionTitle}>
                        Co Cię <span className={styles.accent}>czeka?</span>
                    </h2>
                    <div className={styles.classesGrid}>
                        {classes.map((item, index) => (
                            <div key={index} className={styles.classCard}>
                                <div className={styles.classIcon}>{item.icon}</div>
                                <div className={styles.classContent}>
                                    <h3 className={styles.classTitle}>{item.title}</h3>
                                    <p className={styles.classDescription}>{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                <section className={styles.contactSection}>
                    <div className={styles.contactContent}>
                        <div className={styles.contactInfo}>
                            <h2 className={styles.contactTitle}>
                                Masz <span className={styles.accent}>pytania?</span>
                            </h2>
                            <p className={styles.contactText}>
                                Zapisy przyjmuje i szczegółowych informacji udziela sekretariat
                                MDK Czechowice-Dziedzice.
                            </p>
                            <div className={styles.contactButtons}>
                                <a href="tel:322153285" className={styles.contactButton}>
                                    <FaPhone />
                                    32 215 32 85
                                </a>
                                <a href="tel:691690816" className={styles.contactButton}>
                                    <FaPhone />
                                    691 690 816
                                </a>
                            </div>
                        </div>
                        <div className={styles.contactImage}>
                            <Image
                                src={img3}
                                alt="Kontakt"
                                fill
                                sizes="(max-width: 768px) 100vw, 50vw"
                                style={{ objectFit: "cover" }}
                            />
                        </div>
                    </div>
                </section>

                <section className={styles.ctaSection}>
                    <div className={styles.ctaContent}>
                        <FaMicrophone className={styles.ctaIcon} />
                        <h2 className={styles.ctaTitle}>Gotowy na przygodę?</h2>
                        <p className={styles.ctaText}>
                            Nie czekaj – rozpocznij swoją artystyczną podróż już dziś!
                        </p>
                        <a href="tel:322153285" className={styles.ctaButton}>
                            Zadzwoń i zapisz się
                            <FaArrowRight />
                        </a>
                    </div>
                </section>
            </div>
        </div>
    );
}