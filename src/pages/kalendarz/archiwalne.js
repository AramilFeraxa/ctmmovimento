import PageHeader from '../../Components/PageHeader/PageHeader'
import CalendarPage from '../../Components/Calendar/CalendarPage'
import Layout from '../../Components/Layout/Layout'

export default function Kalendarz() {

    return (
        <Layout>
            <PageHeader
                title="Kalendarz - Archiwalne"
                subtitle="Sprawdź archiwalne wydarzenia CTM Movimento"
            />
            <CalendarPage filter="past" />
        </Layout>
    )
}
