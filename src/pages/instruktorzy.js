import { Container } from 'react-bootstrap'
import InstructorGrid from '../Components/Instructors/InstructorsGrid'
import Layout from '../Components/Layout/Layout'
import PageHeader from '../Components/PageHeader/PageHeader'

export default function Instruktorzy() {
    const Seo = {
        title: 'Instruktorzy | Czechowicki Teatr Muzyczny Movimento',
        description:
            'Poznaj osoby, które stoją za rozwojem artystycznym wykonawców CTM Movimento.',
    }
    return (
        <Layout seo={Seo}>
            <PageHeader
                title="Instruktorzy"
                subtitle="Poznaj osoby, które stoją za rozwojem artystycznym naszych wykonawców."
            />
            <Container>
                <InstructorGrid />
            </Container>
        </Layout>
    )
}
