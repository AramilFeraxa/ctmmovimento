import Link from "next/link";
import Image from "next/image";
import styles from "./About.module.css";
import aboutImage from "../../assets/images/main.jpg";
import {
    FaClock,
    FaTheaterMasks,
    FaUsers,
    FaStar,
    FaMusic,
    FaDumbbell,
    FaChalkboardTeacher,
    FaBuilding,
    FaArrowRight,
    FaCheckCircle
} from "react-icons/fa";

export default function About() {
    const stats = [
        {
            number: "20+",
            label: "Lat doświadczenia",
            icon: <FaClock />,
        },
        {
            number: "100+",
            label: "Spektakli",
            icon: <FaTheaterMasks />,
        },
        {
            number: "100+",
            label: "Zadowolonych uczestników",
            icon: <FaUsers />,
        },
        {
            number: "10+",
            label: "Profesjonalnych instruktorów",
            icon: <FaStar />,
        },
    ];

    const features = [
        {
            title: "Spektakle i koncerty",
            description:
                "Spełnij swoje marzenia i zagraj lub zaśpiewaj na scenie - kilka razy w roku",
            icon: <FaMusic />,
        },
        {
            title: "Zajęcia artystyczne",
            description:
                "Kompleksowe zajęcia ze śpiewu i aktorstwa dla dzieci, młodzieży i dorosłych na każdym poziomie.",
            icon: <FaDumbbell />,
        },
        {
            title: "Instruktorzy z pasją",
            description:
                "Nasz zespół to wykwalifikowani pedagodzy z doświadczeniem scenicznym i międzynarodowymi sukcesami.",
            icon: <FaChalkboardTeacher />,
        },
        {
            title: "Siedziba",
            description:
                "Działamy przy Miejskim Domu Kultury w Czechowicach-Dziedzicach, gdzie do dyspozycji jest kilka sal zajęciowych.",
            icon: <FaBuilding />,
        },
    ];

    const highlights = [
        "Warsztaty wokalne i aktorskie",
        "Regularne koncerty i spektakle",
        "Przyjazna i wspierająca atmosfera",
        "Indywidualne podejście do każdego uczestnika",
    ];

    return (
        <section className={styles.about}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <span className={styles.badge}>O nas</span>
                    <h2 className={styles.title}>
                        Pasja do teatru
                        <span className={styles.titleAccent}> od 2005 roku</span>
                    </h2>

                </div>

                <div className={styles.imageSection}>
                    <div className={styles.imageWrapper}>
                        <Image
                            src={aboutImage}
                            alt="CTM Movimento - Teatr Muzyczny"
                            fill
                            sizes="(max-width: 768px) 100vw, 50vw"
                            style={{ objectFit: "cover" }}
                        />
                        <div className={styles.imageOverlay}></div>
                    </div>
                    <div className={styles.imageContent}>
                        <h3 className={styles.imageTitle}>
                            Razem rozwińmy skrzydła!
                        </h3>
                        <p className={styles.imageText}>
                            Od ponad 20 lat wspieramy rozwój talentów i pasjonatów sztuki
                            scenicznej. U nas każdy może doskonalić swoje umiejętności, poznać
                            ciekawych ludzi i przeżyć niezapomniane chwile, aby później mieć perspektywy wystąpienia na scenach na całym świecie.
                        </p>
                        <ul className={styles.highlightsList}>
                            {highlights.map((item, index) => (
                                <li key={index} className={styles.highlightItem}>
                                    <FaCheckCircle className={styles.checkIcon} />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className={styles.statsGrid}>
                    {stats.map((stat, index) => (
                        <div key={index} className={styles.statCard}>
                            <div className={styles.statIcon}>{stat.icon}</div>
                            <div className={styles.statNumber}>{stat.number}</div>
                            <div className={styles.statLabel}>{stat.label}</div>
                        </div>
                    ))}
                </div>

                <div className={styles.featuresGrid}>
                    {features.map((feature, index) => (
                        <div key={index} className={styles.featureCard}>
                            <div className={styles.featureIcon}>{feature.icon}</div>
                            <h3 className={styles.featureTitle}>{feature.title}</h3>
                            <p className={styles.featureDescription}>{feature.description}</p>
                        </div>
                    ))}
                </div>

                <div className={styles.cta}>
                    <div className={styles.ctaContent}>
                        <h3 className={styles.ctaTitle}>
                            Gotowy, aby rozpocząć swoją przygodę?
                        </h3>
                        <p className={styles.ctaDescription}>
                            Dołącz do nas i odkryj swój potencjał artystyczny!
                        </p>
                    </div>
                    <div className={styles.ctaButtons}>
                        <Link href="/o-nas/dolacz" className={styles.ctaPrimary}>
                            Zapisz się na zajęcia
                            <FaArrowRight />
                        </Link>
                        <Link href="/o-nas" className={styles.ctaSecondary}>
                            Dowiedz się więcej
                        </Link>
                    </div>
                </div>
            </div>

            <div className={styles.decoration}>
                <div className={styles.decorationCircle}></div>
            </div>
        </section>
    );
}