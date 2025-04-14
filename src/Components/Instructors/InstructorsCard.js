import styles from './InstructorsCard.module.css'

export default function InstructorCard({ name, role, photo, bio, reverse }) {
    return (
        <div className={`${styles.card} ${reverse ? styles.reverse : ''}`}>
            <img src={photo} alt={name} className={styles.photo} />
            <div className={styles.info}>
                <h3>{name}</h3>
                <p className={styles.role}>{role}</p>
                <p className={styles.bio}>{bio}</p>
            </div>
        </div>
    )
}
