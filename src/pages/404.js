import Link from 'next/link'
import styles from '../assets/styles/NotFound.module.css'
import Layout from '../Components/Layout/Layout'
import PageHeader from '../Components/PageHeader/PageHeader'
import NotFound from '../Components/NotFound/NotFound'

export default function NotFoundPage() {
    return (
        <Layout>
            <PageHeader
                title="Nie znaleziono strony"
                subtitle="Wygląda na to, że jesteś w złym miejscu."
            />
            <NotFound />
        </Layout>
    )
}