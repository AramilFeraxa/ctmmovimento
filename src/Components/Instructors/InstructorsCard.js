import Image from 'next/image';
import styles from './InstructorsCard.module.css';
import { FaEnvelope, FaPhone, FaGraduationCap } from 'react-icons/fa';

export default function InstructorCard({ name, role, bio, photo, email, phone, reverse }) {
    return (
        <article className={`${styles.card} ${reverse ? styles.reverse : ''}`}>
            <div className={styles.imageWrapper}>
                <Image
                    src={photo}
                    alt={name}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    style={{ objectFit: 'cover', objectPosition: 'top center' }}
                />
                <div className={styles.imageOverlay}></div>
            </div>

            <div className={styles.content}>
                <div className={styles.header}>
                    <div className={styles.iconBadge}>
                        <FaGraduationCap />
                    </div>
                    <div>
                        <h3 className={styles.name}>{name}</h3>
                        <p className={styles.role}>{role}</p>
                    </div>
                </div>

                <p className={styles.bio}>{bio}</p>

                <div className={styles.contact}>
                    {email && (
                        <a href={`mailto:${email}`} className={styles.contactItem}>
                            <FaEnvelope />
                            <span>{email}</span>
                        </a>
                    )}
                    {phone && (
                        <a href={`tel:${phone}`} className={styles.contactItem}>
                            <FaPhone />
                            <span>{phone}</span>
                        </a>
                    )}
                </div>
            </div>
        </article>
    );
}