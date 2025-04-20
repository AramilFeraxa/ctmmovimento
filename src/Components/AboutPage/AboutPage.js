import styles from './AboutPage.module.css'
import { Container } from 'react-bootstrap'
import ctmImage from '../../assets/images/movimento.jpeg'
import bambiniImage from '../../assets/images/grupa_dziecieca.jpg'
import plusImage from '../../assets/images/movimento_plus.jpg'
import Link from 'next/link'

export default function About() {
    return (
        <Container>
            <div className={styles.wrapper}>
                <section className={styles.block}>
                    <img src={ctmImage.src} alt="CTM Movimento" className={styles.thumb} />
                    <h1>CTM Movimento</h1>
                    <p>
                        Czechowicki Teatr Muzyczny „Movimento” to wielopokoleniowa grupa artystyczna, działająca od 2005 roku przy Miejskim Domu Kultury w Czechowicach-Dziedzicach. Założony przez Barbarę Bielaczyc, teatr ten łączy pasję do muzyki i teatru z profesjonalnym przygotowaniem wokalnym i aktorskim.
                    </p>
                    <p>
                        W skład zespołu wchodzi około 40 osób w wieku od 10 do 24 lat, którzy regularnie występują w spektaklach musicalowych, operowych, operetkowych oraz koncertach o szerokim repertuarze. Wśród realizowanych produkcji znajdują się takie tytuły jak „Stabat Mater” G. B. Pergolesiego, „Pasja Janowa” G. F. Haendla, „West Side Story” L. Bernsteina, „My Fair Lady” A. J. Lernera, „Kiss Me, Kate” Cole’a Portera czy „Bastien i Bastienne” W. A. Mozarta.
                    </p>
                    <p>
                        Celem Teatru jest nie tylko rozwój artystyczny jego członków, ale także przygotowanie ich do studiów artystycznych — wokalnych i aktorskich. Wielu członków „Movimento” odnosi sukcesy w ogólnopolskich i międzynarodowych konkursach, a także z powodzeniem kontynuuje karierę na scenach zawodowych teatrów dramatycznych i muzycznych w Polsce i za granicą, a także w produkcjach telewizyjnych.
                    </p>
                </section>

                <section className={styles.block}>
                    <img src={bambiniImage.src} alt="Movimento Bambini" className={styles.thumb} />
                    <h2>Movimento Bambini</h2>
                    <p>
                        Grupa dziecięca CTM Movimento to najmłodsi artyści. W jej skład wchodzą dzieci w wieku do 13 lat. Zajęcia odbywają się w dwóch grupach wiekowych: młodszej (do 9 lat) i starszej (10-13 lat). Program obejmuje zajęcia wokalne, ruchowe oraz teatralne, które rozwijają zdolności muzyczne, kreatywność i pewność siebie najmłodszych artystów pod okiem doświadczonych instruktorów. Grupa dziecięca także regularnie prezentuje swoje umiejętności na scenie, biorąc udział w koncertach i spektaklach.
                    </p>
                </section>

                <section className={styles.block}>
                    <img src={plusImage.src} alt="Movimento Plus" className={styles.thumb} />
                    <h2>Movimento Plus</h2>
                    <p>
                        „Movimento Plus” to grupa skierowana do osób powyżej 30. roku życia, które pragną rozwijać swoje pasje muzyczne i aktorskie. Grupa ta oferuje możliwość nauki śpiewu, dykcji oraz gry aktorskiej, a także udziału w projektach artystycznych i koncertach u boku głównego zespołu. To doskonałe miejsce dla osób, które mimo wieku chcą zrealizować swoje marzenia sceniczne i dołączyć do artystycznej społeczności. Opiekę nad Movimento Plus sprawuje prof. Rafał Majzner.
                    </p>
                </section>
                <Link href="/o-nas/dolacz" className="button">Dołącz do nas</Link>
            </div>
        </Container>
    )
}
