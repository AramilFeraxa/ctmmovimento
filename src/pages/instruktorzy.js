import { Container } from 'react-bootstrap'
import InstructorGrid from '../Components/Instructors/InstructorsGrid'
import styles from '../components/Instructors/InstructorsPage.module.css'
import Layout from '../Components/Layout/Layout'
import PageHeader from '../Components/PageHeader/PageHeader'

export default function Instruktorzy() {
    return (
        <Layout>
            <PageHeader
                title="Instruktorzy"
                subtitle="Poznaj osoby, które stoją za rozwojem artystycznym naszych wykonawców."
            />
            <Container>
                <section className={styles.wrapper}>
                    <InstructorGrid />
                </section>
            </Container>
        </Layout>
    )
}
