import { useState } from "react";
import Link from "next/link";
import ShowCard from "./ShowCard";
import styles from "./Shows.module.css";
import { events } from "../../data/events";
import {
    FaTheaterMasks,
    FaCalendarAlt,
    FaMusic,
    FaMicrophone,
    FaStar,
    FaArrowRight,
    FaChevronDown,
    FaPlus
} from "react-icons/fa";

export default function Shows() {
    const [filter, setFilter] = useState("upcoming");
    const [visibleCount, setVisibleCount] = useState(6);

    const filteredShows = events.filter((show) => {
        if (filter === "all") return true;
        if (filter === "upcoming") {
            const showDate = new Date(show.date);
            return showDate >= new Date();
        }
        if (filter === "past") {
            const showDate = new Date(show.date);
            return showDate < new Date();
        }
        return show.category === filter;
    });

    const visibleShows = filteredShows.slice(0, visibleCount);
    const hasMore = visibleCount < filteredShows.length;

    const loadMore = () => {
        setVisibleCount((prev) => prev + 6);
    };

    const filters = [
        { id: "upcoming", label: "Nadchodzące", icon: <FaCalendarAlt /> },
        { id: "all", label: "Wszystkie", icon: <FaTheaterMasks /> },
        { id: "musical", label: "Musicale", icon: <FaMusic /> },
        { id: "concert", label: "Koncerty", icon: <FaMicrophone /> },
        { id: "workshop", label: "Warsztaty", icon: <FaStar /> },
    ];

    return (
        <section className={styles.shows}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <div className={styles.headerContent}>
                        <span className={styles.badge}>Nasze Spektakle</span>
                        <h2 className={styles.title}>
                            Nadchodzące
                            <span className={styles.titleAccent}> Wydarzenia</span>
                        </h2>
                        <p className={styles.subtitle}>
                            Odkryj piękno kultury. Sprawdź nasz repertuar i dołącz do
                            naszych niezapomnianych wydarzeń.
                        </p>
                    </div>
                    <Link href="/kalendarz" className={styles.viewAllButton}>
                        Zobacz wszystkie
                        <FaArrowRight />
                    </Link>
                </div>

                <div className={styles.filters}>
                    {filters.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => {
                                setFilter(item.id);
                                setVisibleCount(6);
                            }}
                            className={`${styles.filterButton} ${filter === item.id ? styles.filterActive : ""
                                }`}
                        >
                            <span className={styles.filterIcon}>{item.icon}</span>
                            {item.label}
                        </button>
                    ))}
                </div>

                {visibleShows.length > 0 ? (
                    <>
                        <div className={styles.grid}>
                            {visibleShows.map((show, index) => (
                                <ShowCard key={show.id || index} show={show} index={index} />
                            ))}
                        </div>

                        {hasMore && (
                            <div className={styles.loadMoreContainer}>
                                <button onClick={loadMore} className={styles.loadMoreButton}>
                                    Załaduj więcej
                                    <FaChevronDown />
                                </button>
                            </div>
                        )}
                    </>
                ) : (
                    <div className={styles.empty}>
                        <FaPlus className={styles.emptyIcon} />
                        <h3 className={styles.emptyTitle}>Brak wydarzeń</h3>
                        <p className={styles.emptyText}>
                            W tej kategorii nie ma jeszcze żadnych wydarzeń. Sprawdź inne zakładki!
                        </p>
                    </div>
                )}
            </div>

            <div className={styles.decorations}>
                <div className={styles.decoration1}></div>
                <div className={styles.decoration2}></div>
            </div>
        </section>
    );
}