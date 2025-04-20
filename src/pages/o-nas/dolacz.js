import { Container } from 'react-bootstrap'
import JoinUsPage from '../../Components/AboutPage/JoinUs'
import Layout from '../../Components/Layout/Layout'
import PageHeader from '../../Components/PageHeader/PageHeader'

export default function JoinUs() {
    return (
        <Layout>
            <PageHeader
                title="Dołącz do nas!"
            />
            <JoinUsPage />
        </Layout>
    )
}
