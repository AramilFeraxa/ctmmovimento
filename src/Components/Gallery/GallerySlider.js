import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';

import Link from 'next/link';
import Image from 'next/image';
import styles from './GallerySlider.module.css';
import { galleries } from '../../data/galleries';
import parsePolishDate from '../../utils/parsePolishDate';
import { FaArrowRight, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

export default function GallerySlider() {
    const sortedGalleries = [...galleries].sort((a, b) => {
        if (!a.date) return 1;
        if (!b.date) return -1;
        return parsePolishDate(b.date) - parsePolishDate(a.date);
    });

    const recentGalleries = sortedGalleries.slice(0, 5);

    return (
        <section className={styles.gallery}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <div className={styles.headerContent}>
                        <span className={styles.badge}>Galeria</span>
                        <h2 className={styles.title}>
                            Nasze
                            <span className={styles.titleAccent}> Wspomnienia</span>
                        </h2>
                        <p className={styles.subtitle}>
                            Zobacz najlepsze momenty z naszych spektakli i wydarzeń
                        </p>
                    </div>
                    <Link href="/#" className={styles.viewAllButton}>
                        Pełna galeria
                        <FaArrowRight />
                    </Link>
                </div>

                {/*
                <div className={styles.sliderWrapper}>
                    <Swiper
                        modules={[Navigation, Autoplay, EffectCoverflow, Pagination]}
                        effect="coverflow"
                        grabCursor={true}
                        centeredSlides={true}
                        slidesPerView="auto"
                        coverflowEffect={{
                            rotate: 0,
                            stretch: 0,
                            depth: 100,
                            modifier: 2,
                            slideShadows: true,
                        }}
                        autoplay={{
                            delay: 5000,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true,
                        }}
                        navigation={{
                            prevEl: `.${styles.navButtonPrev}`,
                            nextEl: `.${styles.navButtonNext}`,
                        }}
                        pagination={{
                            el: `.${styles.pagination}`,
                            clickable: true,
                            dynamicBullets: true,
                        }}
                        loop={true}
                        breakpoints={{
                            0: {
                                slidesPerView: 1,
                                spaceBetween: 20,
                            },
                            640: {
                                slidesPerView: 1.5,
                                spaceBetween: 20,
                            },
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 30,
                            },
                            1024: {
                                slidesPerView: 2.5,
                                spaceBetween: 30,
                            },
                            1280: {
                                slidesPerView: 3,
                                spaceBetween: 40,
                            },
                        }}
                        className={styles.swiper}
                    >
                        {recentGalleries.map((event) => (
                            <SwiperSlide key={event.slug} className={styles.slide}>
                                <Link href={`/galeria/${event.slug}`} className={styles.card}>
                                    <div className={styles.imageContainer}>
                                        <Image
                                            src={event.cover}
                                            alt={event.title}
                                            fill
                                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                            style={{ objectFit: 'cover' }}
                                        />
                                        <div className={styles.overlay}>
                                            {event.date && (
                                                <span className={styles.date}>{event.date}</span>
                                            )}
                                            {event.type && (
                                                <span className={styles.type}>{event.type}</span>
                                            )}
                                        </div>
                                    </div>
                                    <div className={styles.content}>
                                        <h3 className={styles.cardTitle}>{event.title}</h3>
                                        <div className={styles.viewMore}>
                                            Zobacz więcej
                                            <FaArrowRight />
                                        </div>
                                    </div>
                                </Link>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    <button className={`${styles.navButton} ${styles.navButtonPrev}`} aria-label="Previous slide">
                        <FaChevronLeft />
                    </button>

                    <button className={`${styles.navButton} ${styles.navButtonNext}`} aria-label="Next slide">
                        <FaChevronRight />
                    </button>
                </div>
                */}
            </div>

            <div className={styles.decorations}>
                <div className={styles.decoration}></div>
            </div>
        </section>
    );
}