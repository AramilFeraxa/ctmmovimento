import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Hero.module.css";
import heroImage1 from '../../assets/images/zakonnica.jpg';
import { FaStar, FaArrowRight, FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function Hero() {
    const [isVisible, setIsVisible] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        {
            title: "CTM Movimento",
            subtitle: "Teatr Muzyczny",
            description: "Muzyka, sztuka, pasja",
            cta: "Zobacz repertuar",
            ctaLink: "/kalendarz",
            secondaryCta: "O teatrze",
            secondaryCtaLink: "/o-nas",
            image: heroImage1
        },
        {
            title: "Spektakle i występy",
            subtitle: "Niezapomniane przeżycia",
            description: "Odkryj swoją miłość do teatru",
            cta: "Dołącz do nas",
            ctaLink: "/o-nas/dolacz",
            secondaryCta: "Nasze występy",
            secondaryCtaLink: "/galeria",
            image: heroImage1
        },
        {
            title: "Zajęcia i warsztaty",
            subtitle: "Rozwój artystyczny",
            description: "Śpiew, aktorstwo - rozwijaj swój talent z nami",
            cta: "Poznaj instruktorów",
            ctaLink: "/instruktorzy",
            secondaryCta: "Nasze występy",
            secondaryCtaLink: "/kalendarz/aktualne",
            image: heroImage1
        },
    ];

    useEffect(() => {
        setIsVisible(true);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 7000);

        return () => clearInterval(interval);
    }, [slides.length]);

    const goToSlide = (index) => {
        setCurrentSlide(index);
    };

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    return (
        <section className={styles.hero}>
            <div className={styles.backgroundImages}>
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`${styles.backgroundImage} ${currentSlide === index ? styles.backgroundImageActive : ""
                            }`}
                    >
                        <Image
                            src={slide.image}
                            alt={slide.title}
                            fill
                            priority={index === 0}
                            quality={90}
                            style={{ objectFit: "cover" }}
                        />
                        <div className={styles.overlay}></div>
                    </div>
                ))}
            </div>

            <div className={styles.shapes}>
                <div className={`${styles.shape} ${styles.shape1}`}></div>
                <div className={`${styles.shape} ${styles.shape2}`}></div>
                <div className={`${styles.shape} ${styles.shape3}`}></div>
            </div>

            <div className={styles.container}>
                <div className={`${styles.content} ${isVisible ? styles.visible : ""}`}>
                    <div className={styles.slideContent} key={currentSlide}>
                        <span className={styles.badge}>
                            <FaStar />
                            {slides[currentSlide].subtitle}
                        </span>

                        <h1 className={styles.title}>{slides[currentSlide].title}</h1>

                        <p className={styles.description}>
                            {slides[currentSlide].description}
                        </p>

                        <div className={styles.buttons}>
                            <Link href={slides[currentSlide].ctaLink} className={styles.primaryButton}>
                                {slides[currentSlide].cta}
                                <FaArrowRight />
                            </Link>

                            <Link
                                href={slides[currentSlide].secondaryCtaLink}
                                className={styles.secondaryButton}
                            >
                                {slides[currentSlide].secondaryCta}
                            </Link>
                        </div>
                    </div>
                </div>

                <div className={styles.controls}>
                    <button
                        onClick={prevSlide}
                        className={styles.controlButton}
                        aria-label="Previous slide"
                    >
                        <FaChevronLeft />
                    </button>

                    <div className={styles.dots}>
                        {slides.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => goToSlide(index)}
                                className={`${styles.dot} ${currentSlide === index ? styles.dotActive : ""
                                    }`}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>

                    <button
                        onClick={nextSlide}
                        className={styles.controlButton}
                        aria-label="Next slide"
                    >
                        <FaChevronRight />
                    </button>
                </div>
            </div>
        </section>
    );
}