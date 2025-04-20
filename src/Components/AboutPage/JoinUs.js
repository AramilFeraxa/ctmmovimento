import styles from './JoinUs.module.css'
import { Container } from 'react-bootstrap'
import Link from 'next/link'
import img1 from '../../assets/images/joinus1.jpg'
import img2 from '../../assets/images/joinus2.jpg'
import img3 from '../../assets/images/joinus3.jpg'
import img4 from '../../assets/images/joinus4.jpg'
import img5 from '../../assets/images/joinus5.jpg'

export default function JoinUs() {
    return (
        <Container>
            <div className={styles.wrapper}>
                <section className={styles.hero}>
                    <div className={styles.images}>
                        <img src={img1.src} alt="Movimento" className={styles.image} />
                        <img src={img2.src} alt="Movimento" className={styles.image} />
                    </div>
                    <h1>Dołącz do CTM Movimento!</h1>
                    <section className={styles.quote}>
                        <blockquote>
                            <p>
                                Chcesz śpiewać w chórze? Niech cię słyszą w górze!<br />
                                Ufaj naturze, daj się ponieść jej.<br />
                                Jeśli w duszy nagle wszystko się układa w rytm,<br />
                                nie egoistą i głośno podziel się tym!<br />
                                Niech twój głos wzniesie się do nieba,<br />
                                pokaż głos – przecież to nie wstyd!<br />
                                Pokaż moc, pokaż styl, pokaż głos!
                            </p>
                        </blockquote>
                    </section>
                    <p>
                        Marzysz o scenie? Uwielbiasz śpiewać, tańczyć lub grać w teatrze? Niezależnie od wieku –
                        CTM Movimento czeka właśnie na Ciebie!
                    </p>
                </section>

                <section className={styles.infoBlock}>
                    <h2>Dla kogo?</h2>
                    <p>
                        Nasze grupy są otwarte dla dzieci (Movimento Bambini), młodzieży i studentów (Movimento) oraz dorosłych i seniorów (Movimento Plus).
                        Nie musisz mieć doświadczenia – liczy się pasja i chęć tworzenia!
                    </p>
                    <img src={img4.src} alt="Movimento" className={styles.image} />
                </section>

                <section className={styles.infoBlockAlt}>
                    <h2>Dlaczego warto?</h2>
                    <ul>
                        <li>🎭 Warsztaty teatralne, wokalne i taneczne</li>
                        <li>🎤 Regularne występy na scenie</li>
                        <li>🤝 Przyjazna atmosfera i wspaniali ludzie</li>
                        <li>🌟 Możliwość rozwijania pasji pod okiem doświadczonych instruktorów</li>
                    </ul>
                    <img src={img5.src} alt="Movimento" className={styles.image} />
                </section>

                <section className={styles.infoBlock}>
                    <h2>Co Cię czeka?</h2>
                    <ul>
                        <li>🎤 Lekcje śpiewu klasycznego, estradowego, jazzowego, piosenki aktorskiej <i>(zajęcia indywidualne)</i></li>
                        <li>🗣️ Dykcja i recytacja <i>(zajęcia indywidualne)</i></li>
                        <li>🎭 Podstawy gry aktorskiej <i>(zajęcia grupowe)</i></li>
                        <li>🎼 Zajęcia umuzykalniające <i>(zajęcia grupowe)</i></li>
                        <li>👥 Chór i zespoły wokalne</li>
                        <li>🎬 Grupa aktorska</li>
                        <li>🎓 Zajęcia przygotowawcze do szkół teatralnych <i>(dla zainteresowanych)</i></li>
                    </ul>
                </section>

                <section className={styles.infoBlockAlt}>
                    <h2>Masz pytania?</h2>
                    <p>
                        Zapisy przyjmuje i szczegółowych informacji udziela sekretariat MDK Czechowice-Dziedzice.
                    </p>
                    <p className={styles.contact}>
                        <Link href='tel:322153285' className={styles.phone}>📞 tel. 32 215 32 85</Link>
                        <Link href='tel:691690816' className={styles.phone}>📞 tel. 691 690 816</Link>
                    </p>
                    <img src={img3.src} alt="Movimento" className={styles.image} />
                </section>
            </div>
        </Container>
    )
}
