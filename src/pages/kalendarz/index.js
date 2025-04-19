import PageHeader from '../../Components/PageHeader/PageHeader'
import CalendarPage from '../../Components/Calendar/CalendarPage'
import Layout from '../../Components/Layout/Layout'

export default function Kalendarz() {

    return (
        <Layout>
            <PageHeader
                title="Kalendarz"
                subtitle="Sprawdź nadchodzące i archiwalne wydarzenia CTM Movimento"
            />
            <CalendarPage />
        </Layout>
    )
}
