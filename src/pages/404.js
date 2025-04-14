import Link from 'next/link'
import styles from '../assets/styles/NotFound.module.css'
import Layout from '../Components/Layout/Layout'
import PageHeader from '../Components/PageHeader/PageHeader'

export default function NotFoundPage() {
    return (
        <Layout>
            <PageHeader
                title="Nie znaleziono strony"
                subtitle="Wygląda na to, że jesteś w złym miejscu."
            />
            <div className={styles.wrapper}>
                <div className={styles.inner}>
                    <h1>404</h1>
                    <h2>Strona nie istnieje</h2>
                    <p>Nie znaleziono strony, której szukasz.</p>
                    <Link href="/" className="button button-yellow">Powrót na stronę główną</Link>
                </div>
            </div>
        </Layout>
    )
}