import PageHeader from '../../Components/PageHeader/PageHeader'
import CalendarPage from '../../Components/Calendar/CalendarPage'
import Layout from '../../Components/Layout/Layout'

export default function Kalendarz() {
    const Seo = {
        title: 'Kalendarz | Czechowicki Teatr Muzyczny Movimento',
        description:
            'Sprawdź nadchodzące i archiwalne wydarzenia CTM Movimento',
    }
    return (
        <Layout seo={Seo}>
            <PageHeader
                title="Kalendarz"
                subtitle="Sprawdź nadchodzące i archiwalne wydarzenia CTM Movimento"
            />
            <CalendarPage />
        </Layout>
    )
}
