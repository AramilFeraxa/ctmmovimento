import styles from './CalendarPage.module.css'
import EventList from './EventList'
import dynamic from 'next/dynamic'
import { useState } from 'react'
import { events } from '../../data/events'

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

    return (
        <div className={styles.wrapper}>
            <div className={styles.switcher}>
                <button
                    className={view === 'list' ? styles.active : ''}
                    onClick={() => setView('list')}
                >
                    Widok listy
                </button>
                <button
                    className={view === 'calendar' ? styles.active : ''}
                    onClick={() => setView('calendar')}
                >
                    Widok kalendarza
                </button>
            </div>

            {view === 'list' ? (
                <EventList events={filteredEvents} filter={filter} />
            ) : (
                <EventCalendar events={filteredEvents} />
            )}
        </div>
    )
}

export default CalendarPage
