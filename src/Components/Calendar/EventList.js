import styles from './EventList.module.css'
import ShowCard from '../Shows/ShowCard'
import { FaCalendarTimes, FaClock, FaHistory } from 'react-icons/fa'

const EventList = ({ events, filter }) => {
    const today = new Date()
    today.setHours(0, 0, 0, 0)

    const sortedEvents = [...events].sort((a, b) => {
        return new Date(b.date) - new Date(a.date)
    })

    const upcomingEvents = sortedEvents.filter(event => new Date(event.date) >= today)
    const pastEvents = sortedEvents.filter(event => new Date(event.date) < today)

    if (events.length === 0) {
        return (
            <div className={styles.noEvents}>
                <FaCalendarTimes className={styles.noEventsIcon} />
                <h3 className={styles.noEventsTitle}>Brak wydarzeń</h3>
                <p className={styles.noEventsText}>
                    {filter === 'future'
                        ? 'Obecnie nie mamy zaplanowanych wydarzeń. Wkrótce pojawią się nowe!'
                        : 'Nie znaleziono wydarzeń w wybranej kategorii.'}
                </p>
            </div>
        )
    }

    return (
        <div className={styles.container}>
            {upcomingEvents.length > 0 && (
                <section className={styles.section}>
                    <div className={styles.sectionHeader}>
                        <div className={styles.sectionIcon}>
                            <FaClock />
                        </div>
                        <div className={styles.sectionTitleWrapper}>
                            <h3 className={styles.sectionTitle}>Nadchodzące wydarzenia</h3>
                            <p className={styles.sectionSubtitle}>Już wkrótce na naszej scenie</p>
                        </div>
                        <span className={styles.badge}>{upcomingEvents.length}</span>
                    </div>
                    <div className={styles.list}>
                        {upcomingEvents.map((event, index) => (
                            <div key={index} className={styles.cardWrapper}>
                                <ShowCard show={event} />
                            </div>
                        ))}
                    </div>
                </section>
            )}

            {pastEvents.length > 0 && (
                <section className={`${styles.section} ${styles.pastSection}`}>
                    <div className={styles.sectionHeader}>
                        <div className={`${styles.sectionIcon} ${styles.pastIcon}`}>
                            <FaHistory />
                        </div>
                        <div className={styles.sectionTitleWrapper}>
                            <h3 className={styles.sectionTitle}>Archiwum wydarzeń</h3>
                            <p className={styles.sectionSubtitle}>Nasze dotychczasowe występy</p>
                        </div>
                        <span className={`${styles.badge} ${styles.pastBadge}`}>{pastEvents.length}</span>
                    </div>
                    <div className={`${styles.list} ${styles.pastList}`}>
                        {pastEvents.map((event, index) => (
                            <div key={index} className={`${styles.cardWrapper} ${styles.pastCard}`}>
                                <ShowCard show={event} isPast={true} />
                                <div className={styles.pastOverlay}>
                                    <span className={styles.pastLabel}>Archiwum</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            )}
        </div>
    )
}

export default EventList