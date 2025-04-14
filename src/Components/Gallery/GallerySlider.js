import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay, EffectCoverflow } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/effect-coverflow'

import Link from 'next/link'
import shared from './GalleryShared.module.css'
import layout from './GallerySlider.module.css'
import { galleries } from '../../data/galleries'
import { Container } from 'react-bootstrap'
import parsePolishDate from '../../utils/parsePolishDate'

export default function GallerySlider() {

    const sortedGalleries = [...galleries].sort((a, b) => {
        if (!a.date) return 1
        if (!b.date) return -1
        return parsePolishDate(a.date) - parsePolishDate(b.date)
    })

    return (
        <Container>
            <section className={shared.gallery}>
                <h1>Galeria wydarzeń</h1>

                <div className={layout.sliderWrapper}>
                    <Swiper
                        modules={[Navigation, Autoplay, EffectCoverflow]}
                        navigation={{
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev',
                        }}
                        effect="coverflow"
                        grabCursor={true}
                        centeredSlides={true}
                        autoplay={{
                            delay: 5000,
                            disableOnInteraction: false,
                        }}
                        slidesPerView={4}
                        spaceBetween={20}
                        breakpoints={{
                            1400: { slidesPerView: 4 },
                            992: { slidesPerView: 3 },
                            768: { slidesPerView: 2 },
                            0: { slidesPerView: 1.2 },
                        }}
                        className={layout.slider}
                    >
                        {sortedGalleries.map(event => (
                            <SwiperSlide key={event.slug} className={layout.slide}>
                                <Link href={`/galeria/${event.slug}`} className={shared.card}>
                                    <div className={shared.overlay}>
                                        <img src={event.cover} alt={event.title} />
                                        {event.date && <p className={shared.date}>{event.date}</p>}
                                    </div>
                                    <p className={shared.title}>{event.title}</p>
                                    <p className={shared.type}>{event.type}</p>
                                </Link>
                            </SwiperSlide>
                        ))}

                        <div className="swiper-button-prev"></div>
                        <div className="swiper-button-next"></div>
                    </Swiper>
                </div>

                <div className={layout.buttonWrapper}>
                    <Link href="/galeria" className="button button-yellow">
                        Zobacz wszystkie
                    </Link>
                </div>
            </section>
        </Container>
    )
}
