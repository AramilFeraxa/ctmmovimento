import { Container } from 'react-bootstrap'
import AboutPage from '../../Components/AboutPage/AboutPage'
import Layout from '../../Components/Layout/Layout'
import PageHeader from '../../Components/PageHeader/PageHeader'

export default function AboutUs() {
    const Seo = {
        title: 'O nas | Czechowicki Teatr Muzyczny Movimento',
        description:
            'Poznaj nasz zespół, jego historię oraz poszczególne grupy wiekowe.',
    }
    return (
        <Layout seo={Seo}>
            <PageHeader
                title="O nas"
                subtitle="Poznaj nasz zespół"
            />
            <AboutPage />
        </Layout>
    )
}
