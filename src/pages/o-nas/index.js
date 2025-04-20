import { Container } from 'react-bootstrap'
import AboutPage from '../../Components/AboutPage/AboutPage'
import Layout from '../../Components/Layout/Layout'
import PageHeader from '../../Components/PageHeader/PageHeader'

export default function AboutUs() {
    return (
        <Layout>
            <PageHeader
                title="O nas"
                subtitle="Poznaj nasz zespół"
            />
            <AboutPage />
        </Layout>
    )
}
