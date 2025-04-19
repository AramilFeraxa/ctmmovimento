import { useState } from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import styles from './EventCalendar.module.css'
import ShowCard from '../Shows/ShowCard'

export default function EventCalendar({ events }) {
    const [selectedDate, setSelectedDate] = useState(new Date())

    const markedDates = events.map(e => new Date(e.date).toDateString())

    const filteredEvents = events.filter(
        e => new Date(e.date).toDateString() === selectedDate.toDateString()
    )

    const tileContent = ({ date, view }) => {
        if (view === 'month') {
            const dayEvents = events.filter(
                e => new Date(e.date).toDateString() === date.toDateString()
            )
            if (dayEvents.length === 1) {
                return (
                    <div className={styles.dayMarker}>
                        <span className={styles.singleEvent}>{dayEvents[0].title}</span>
                        <span className={styles.dot}>📍</span>
                    </div>
                )
            } else if (dayEvents.length > 1) {
                return (
                    <div className={styles.dayMarker}>
                        <ul className={styles.eventsList}>
                            {dayEvents.map((e, i) => (
                                <li key={i}>{e.title}</li>
                            ))}
                        </ul>
                        <span className={styles.dot}>📍</span>
                    </div>
                )
            }
        }
        return null
    }

    return (
        <div className={styles.wrapper}>
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
                className={`${styles.calendar} react-calendar`}
            />

            <div className={styles.events}>
                {filteredEvents.length > 0 ? (
                    filteredEvents.map((e, i) => (
                        <ShowCard key={i} show={e} />
                    ))
                ) : (
                    <p className={styles.noEvents}>Brak wydarzeń tego dnia.</p>
                )}
            </div>
        </div>
    )
}
