import { Container } from 'react-bootstrap'
import JoinUsPage from '../../Components/AboutPage/JoinUs'
import Layout from '../../Components/Layout/Layout'
import PageHeader from '../../Components/PageHeader/PageHeader'

export default function JoinUs() {
    const Seo = {
        title: 'Dołącz do nas | Czechowicki Teatr Muzyczny Movimento',
        description:
            'Marzysz o scenie? Uwielbiasz śpiewać, tańczyć lub grać w teatrze? Dołącz do CTM Movimento!',
    }
    return (
        <Layout seo={Seo}>
            <PageHeader
                title="Dołącz do nas!"
            />
            <JoinUsPage />
        </Layout>
    )
}
