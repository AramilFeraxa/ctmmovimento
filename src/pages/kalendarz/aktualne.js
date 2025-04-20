import PageHeader from '../../Components/PageHeader/PageHeader'
import CalendarPage from '../../Components/Calendar/CalendarPage'
import Layout from '../../Components/Layout/Layout'

export default function Kalendarz() {

    const Seo = {
        title: 'Kalendarz - Aktualne | Czechowicki Teatr Muzyczny Movimento',
        description:
            'Sprawdź nadchodzące wydarzenia CTM Movimento',
    }
    return (
        <Layout seo={Seo}>
            <PageHeader
                title="Kalendarz - Aktualne"
                subtitle="Sprawdź nadchodzące wydarzenia CTM Movimento"
            />
            <CalendarPage filter="future" />
        </Layout>
    )
}
