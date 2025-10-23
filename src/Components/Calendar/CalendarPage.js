import styles from './CalendarPage.module.css'
import EventList from './EventList'
import dynamic from 'next/dynamic'
import { useState } from 'react'
import { events } from '../../data/events'
import { FaList, FaCalendarAlt, FaTheaterMasks } from 'react-icons/fa'

const EventCalendar = dynamic(() => import('./EventCalendar'), { ssr: false })

const CalendarPage = ({ filter = 'all' }) => {
    const [view, setView] = useState('list')

    const today = new Date()

    const filteredEvents = events.filter(event => {
        const eventDate = new Date(event.date)
        if (filter === 'past') return eventDate < today
        if (filter === 'future') return eventDate >= today
        return true
    })

    const getTitle = () => {
        if (filter === 'past') return 'Archiwum wydarzeń'
        if (filter === 'future') return 'Nadchodzące wydarzenia'
        return 'Wszystkie wydarzenia'
    }

    const getSubtitle = () => {
        if (filter === 'past') return 'Zobacz nasze dotychczasowe spektakle i koncerty'
        if (filter === 'future') return 'Sprawdź, co przygotowaliśmy dla Ciebie'
        return 'Kompletny kalendarz wydarzeń CTM Movimento'
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.header}>
                <div className={styles.headerContent}>
                    <div className={styles.iconWrapper}>
                        <FaTheaterMasks />
                    </div>
                    <h2 className={styles.title}>{getTitle()}</h2>
                    <p className={styles.subtitle}>{getSubtitle()}</p>
                </div>

                <div className={styles.switcher}>
                    <button
                        className={`${styles.switchButton} ${view === 'list' ? styles.active : ''}`}
                        onClick={() => setView('list')}
                    >
                        <FaList />
                        <span>Lista</span>
                    </button>
                    <button
                        className={`${styles.switchButton} ${view === 'calendar' ? styles.active : ''}`}
                        onClick={() => setView('calendar')}
                    >
                        <FaCalendarAlt />
                        <span>Kalendarz</span>
                    </button>
                </div>
            </div>

            <div className={styles.stats}>
                <div className={styles.statCard}>
                    <span className={styles.statNumber}>{filteredEvents.length}</span>
                    <span className={styles.statLabel}>
                        {filter === 'past' ? 'Zrealizowanych' : filter === 'future' ? 'Nadchodzących' : 'Wszystkich'} wydarzeń
                    </span>
                </div>
            </div>

            <div className={styles.content}>
                {view === 'list' ? (
                    <EventList events={filteredEvents} filter={filter} />
                ) : (
                    <EventCalendar events={filteredEvents} filter={filter} />
                )}
            </div>
        </div>
    )
}

export default CalendarPage