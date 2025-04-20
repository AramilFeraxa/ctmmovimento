import PageHeader from '../../Components/PageHeader/PageHeader'
import CalendarPage from '../../Components/Calendar/CalendarPage'
import Layout from '../../Components/Layout/Layout'

export default function Kalendarz() {

    const Seo = {
        title: 'Kalendarz - Archiwalne | Czechowicki Teatr Muzyczny Movimento',
        description:
            'Sprawdź archiwalne wydarzenia CTM Movimento',
    }
    return (
        <Layout seo={Seo}>
            <PageHeader
                title="Kalendarz - Archiwalne"
                subtitle="Sprawdź archiwalne wydarzenia CTM Movimento"
            />
            <CalendarPage filter="past" />
        </Layout>
    )
}
