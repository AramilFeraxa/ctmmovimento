import { useState } from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import styles from './EventCalendar.module.css'
import ShowCard from '../Shows/ShowCard'
import { FaCalendarDay, FaTheaterMasks } from 'react-icons/fa'

export default function EventCalendar({ events, filter = 'all' }) {
    const [selectedDate, setSelectedDate] = useState(new Date())
    const today = new Date()
    today.setHours(0, 0, 0, 0)

    const markedDates = events.map(e => new Date(e.date).toDateString())

    const filteredEvents = events.filter(
        e => new Date(e.date).toDateString() === selectedDate.toDateString()
    )

    const formatSelectedDate = () => {
        return new Intl.DateTimeFormat('pl-PL', {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
        }).format(selectedDate)
    }

    const tileContent = ({ date, view }) => {
        if (view === 'month') {
            const dayEvents = events.filter(
                e => new Date(e.date).toDateString() === date.toDateString()
            )
            if (dayEvents.length > 0) {
                return (
                    <div className={styles.dayMarker}>
                        <span className={styles.eventCount}>{dayEvents.length}</span>
                    </div>
                )
            }
        }
        return null
    }

    const getMinDate = () => {
        if (filter === 'future') {
            return today
        }
        return null
    }

    const getMaxDate = () => {
        if (filter === 'past') {
            const yesterday = new Date(today)
            yesterday.setDate(yesterday.getDate() - 1)
            return yesterday
        }
        return null
    }

    const tileDisabled = ({ date, view }) => {
        if (view === 'month') {
            if (filter === 'future') {
                return date < today
            }
            if (filter === 'past') {
                return date >= today
            }
        }
        return false
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.calendarSection}>
                <div className={styles.calendarHeader}>
                    <FaCalendarDay className={styles.calendarIcon} />
                    <h3 className={styles.calendarTitle}>Wybierz datę</h3>
                </div>
                <Calendar
                    onChange={setSelectedDate}
                    value={selectedDate}
                    locale="pl-PL"
                    tileContent={tileContent}
                    tileClassName={({ date, view }) =>
                        view === 'month' && markedDates.includes(date.toDateString())
                            ? styles.marked
                            : null
                    }
                    tileDisabled={tileDisabled}
                    minDate={getMinDate()}
                    maxDate={getMaxDate()}
                    className={styles.calendar}
                />
            </div>

            <div className={styles.eventsSection}>
                <div className={styles.eventsHeader}>
                    <FaTheaterMasks className={styles.eventsIcon} />
                    <div>
                        <h3 className={styles.eventsTitle}>Wydarzenia w wybranym dniu</h3>
                        <p className={styles.eventsDate}>{formatSelectedDate()}</p>
                    </div>
                    {filteredEvents.length > 0 && (
                        <span className={styles.eventsBadge}>{filteredEvents.length}</span>
                    )}
                </div>

                <div className={styles.eventsList}>
                    {filteredEvents.length > 0 ? (
                        filteredEvents.map((e, i) => (
                            <ShowCard key={i} show={e} />
                        ))
                    ) : (
                        <div className={styles.noEvents}>
                            <FaTheaterMasks className={styles.noEventsIcon} />
                            <p className={styles.noEventsText}>Brak wydarzeń tego dnia</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}