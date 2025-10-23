import Link from "next/link";
import styles from "./TicketsInfo.module.css";
import { FaTicketAlt, FaExternalLinkAlt, FaArrowRight } from "react-icons/fa";

export default function TicketsInfo() {
    return (
        <section className={styles.ticketsInfo}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.iconWrapper}>
                        <FaTicketAlt />
                    </div>

                    <h2 className={styles.title}>Kup bilety na nasze spektakle</h2>

                    <p className={styles.description}>
                        Bilety na wszystkie nasze spektakle i wydarzenia są dostępne w serwisie{" "}
                        <strong>Biletyna.pl</strong>. Rezerwuj miejsca z wyprzedzeniem i ciesz się magią
                        teatru muzycznego!
                    </p>

                    <div className={styles.buttons}>
                        <a
                            href="https://biletyna.pl/tag/Teatr-Muzyczny-Movimento"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.primaryButton}
                        >
                            <FaExternalLinkAlt />
                            Kup bilet na Biletyna.pl
                        </a>

                        <Link href="/kalendarz" className={styles.secondaryButton}>
                            Zobacz repertuar
                            <FaArrowRight />
                        </Link>
                    </div>
                </div>
            </div>

            <div className={styles.decorations}>
                <div className={styles.decoration1}></div>
                <div className={styles.decoration2}></div>
                <div className={styles.decoration3}></div>
            </div>
        </section>
    );
}