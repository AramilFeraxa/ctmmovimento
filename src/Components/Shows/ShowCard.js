import Link from "next/link";
import Image from "next/image";
import styles from "./ShowCard.module.css";
import { FaClock, FaMapMarkerAlt, FaArrowRight } from "react-icons/fa";

export default function ShowCard({ show, index }) {
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const day = date.getDate().toString().padStart(2, "0");
        const month = (date.getMonth() + 1).toString().padStart(2, "0");
        const year = date.getFullYear();
        return { day, month: `${month}.${year}` };
    };

    const { day, month } = formatDate(show.date);

    const getCategoryColor = (category) => {
        const colors = {
            musical: "var(--accent-yellow)",
            concert: "var(--info)",
            workshop: "var(--success)",
            default: "var(--primary-navy)",
        };
        return colors[category] || colors.default;
    };

    return (
        <article
            className={styles.card}
            style={{ animationDelay: `${index * 0.1}s` }}
        >
            <div className={styles.imageContainer}>
                {show.image && (
                    <Image
                        src={show.image}
                        alt={show.title}
                        fill
                        sizes="(max-width: 640px) 100%, (max-width: 1024px) 100%, 100%"
                        style={{ objectFit: "contain" }}
                    />
                )}
                <div className={styles.imageOverlay}></div>

                <div className={styles.dateBadge}>
                    <span className={styles.day}>{day}</span>
                    <span className={styles.month}>{month}</span>
                </div>

                {show.category && (
                    <div
                        className={styles.categoryBadge}
                        style={{ backgroundColor: getCategoryColor(show.category) }}
                    >
                        {show.category === "musical" && "Musical"}
                        {show.category === "concert" && "Koncert"}
                        {show.category === "workshop" && "Warsztat"}
                    </div>
                )}
            </div>

            <div className={styles.content}>
                <h3 className={styles.title}>{show.title}</h3>

                {show.description && (
                    <p className={styles.description}>{show.description}</p>
                )}

                <div className={styles.meta}>
                    {show.time && (
                        <div className={styles.metaItem}>
                            <FaClock />
                            <span>{show.time}</span>
                        </div>
                    )}

                    {show.location && (
                        <div className={styles.metaItem}>
                            <FaMapMarkerAlt />
                            <span>{show.location}</span>
                        </div>
                    )}
                </div>

                <Link href={show.link || "/kalendarz"} className={styles.button}>
                    Zobacz szczegóły
                    <FaArrowRight />
                </Link>
            </div>
        </article>
    );
}