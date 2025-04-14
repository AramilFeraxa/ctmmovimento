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
            />
            <Container>
                <section className={styles.wrapper}>
                    <h1>Instruktorzy CTM Movimento</h1>
                    <p className={styles.intro}>
                        Poznaj osoby, które stoją za rozwojem artystycznym naszych wykonawców.
                    </p>
                    <InstructorGrid />
                </section>
            </Container>
        </Layout>
    )
}
