import { useState, useEffect, useCallback } from 'react'
import { useRouter } from 'next/router'
import { galleries } from '../../data/galleries'
import styles from '../../Components/Gallery/GalleryPage.module.css'
import Layout from '@/Components/Layout/Layout'
import { Container } from 'react-bootstrap'

export default function GalleryPage({ gallery }) {
    const router = useRouter()
    const [loadedCount, setLoadedCount] = useState(0)
    const [allLoaded, setAllLoaded] = useState(false)
    const [lightbox, setLightbox] = useState(null)
    const [preloaded, setPreloaded] = useState({})

    const images = gallery?.images || []
    const total = images.length

    useEffect(() => {
        if (total === 0) { setAllLoaded(true); return }
        let done = 0
        images.forEach(img => {
            const el = new window.Image()
            el.onload = el.onerror = () => {
                done++
                setLoadedCount(done)
                if (done >= total) setAllLoaded(true)
            }
            el.src = img.thumb
        })
    }, []) // eslint-disable-line react-hooks/exhaustive-deps

    const openLightbox = useCallback((index) => {
        setLightbox(index)
    }, [])

    const closeLightbox = useCallback(() => setLightbox(null), [])

    const prevImage = useCallback(() =>
        setLightbox(i => (i - 1 + total) % total)
        , [total])

    const nextImage = useCallback(() =>
        setLightbox(i => (i + 1) % total)
        , [total])

    useEffect(() => {
        if (lightbox === null) return
        const handleKey = (e) => {
            if (e.key === 'ArrowRight') nextImage()
            if (e.key === 'ArrowLeft') prevImage()
            if (e.key === 'Escape') closeLightbox()
        }
        window.addEventListener('keydown', handleKey)
        return () => window.removeEventListener('keydown', handleKey)
    }, [lightbox, nextImage, prevImage, closeLightbox])

    if (!gallery) {
        return <p style={{ padding: '2rem' }}>Galeria nie została znaleziona.</p>
    }

    const seo = {
        title: `Galeria - ${gallery.title} | Czechowicki Teatr Muzyczny Movimento`,
        description: `Galeria zdjęć z wydarzenia ${gallery.title}`,
    }

    return (
        <Layout seo={seo}>
            {!allLoaded && (
                <div className={styles.loadingOverlay}>
                    <div className={styles.loadingBox}>
                        <div className={styles.spinner} />
                        <p>Ładowanie galerii... {loadedCount}/{total}</p>
                    </div>
                </div>
            )}

            <Container>
                <section className={`${styles.wrapper}${!allLoaded ? ' ' + styles.hidden : ''}`}>
                    <button className={`${styles.backButton} button`} onClick={() => router.back()}>
                        <i className="fa-solid fa-arrow-left" /> Powrót
                    </button>
                    <p className={styles.subtitle}>Galeria zdjęć</p>
                    <h1>{gallery.title}</h1>

                    <div className={styles.masonry}>
                        {images.map((img, i) => (
                            <div
                                key={i}
                                className={`${styles.item} ${img.isPortrait ? styles.portrait : styles.landscape}`}
                                onClick={() => openLightbox(i)}
                            >
                                <img
                                    src={img.thumb}
                                    alt={`Zdjęcie ${i + 1}`}
                                />
                            </div>
                        ))}
                    </div>
                </section>
            </Container>

            {lightbox !== null && (
                <div className={styles.lightboxOverlay} onClick={closeLightbox}>
                    <button className={styles.lightboxClose} onClick={closeLightbox} aria-label="Zamknij">✕</button>
                    <button
                        className={styles.lightboxPrev}
                        onClick={(e) => { e.stopPropagation(); prevImage() }}
                        aria-label="Poprzednie"
                    >&#8249;</button>
                    <div className={styles.lightboxImgWrap} onClick={e => e.stopPropagation()}>
                        {/* full-res always rendered — starts loading immediately */}
                        <img
                            key={lightbox}
                            src={images[lightbox].src}
                            alt={`Zdjęcie ${lightbox + 1}`}
                            className={styles.lightboxPhoto}
                            onLoad={(e) => {
                                setPreloaded(p => ({ ...p, [lightbox]: true }))
                            }}
                        />
                        {/* blurred thumb overlaid on top until full-res loads */}
                        {!preloaded[lightbox] && (
                            <img
                                key={lightbox + '-t'}
                                src={images[lightbox].thumb}
                                alt=""
                                aria-hidden="true"
                                className={`${styles.lightboxPhoto} ${styles.lightboxPhotoBlur} ${styles.lightboxThumbOverlay}`}
                            />
                        )}
                    </div>
                    <button
                        className={styles.lightboxNext}
                        onClick={(e) => { e.stopPropagation(); nextImage() }}
                        aria-label="Następne"
                    >&#8250;</button>
                    <div className={styles.lightboxCounter}>{lightbox + 1} / {total}</div>
                </div>
            )}
        </Layout>
    )
}

export async function getStaticPaths() {
    const paths = galleries.map(gallery => ({
        params: { slug: gallery.slug },
    }))
    return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
    const gallery = galleries.find(g => g.slug === params.slug) || null
    if (!gallery) return { props: { gallery: null } }

    let images = []

    if (gallery.folder) {
        const fs = require('fs')
        const path = require('path')
        const dir = path.join(process.cwd(), 'public', gallery.folder)
        const thumbDir = path.join(process.cwd(), 'public', 'thumbs', gallery.folder)

        try {
            const sharp = require('sharp')
            const files = fs.readdirSync(dir).filter(f => /\.(jpe?g|png|webp|gif)$/i.test(f))
            fs.mkdirSync(thumbDir, { recursive: true })

            images = await Promise.all(files.map(async (filename) => {
                const srcPath = path.join(dir, filename)
                const thumbFilename = filename.replace(/\s+/g, '_').replace(/\.(png|gif|webp)$/i, '.jpg')
                const thumbPath = path.join(thumbDir, thumbFilename)

                let isPortrait = false
                try {
                    const meta = await sharp(srcPath).metadata()
                    let w = meta.width || 1
                    let h = meta.height || 1
                    if ([5, 6, 7, 8].includes(meta.orientation)) [w, h] = [h, w]
                    isPortrait = h > w

                    if (!fs.existsSync(thumbPath)) {
                        await sharp(srcPath)
                            .rotate()
                            .resize({ width: 400, withoutEnlargement: true })
                            .jpeg({ quality: 25 })
                            .toFile(thumbPath)
                    }
                } catch (imgErr) {
                    console.warn(`Thumbnail error for ${filename}:`, imgErr.message)
                    if (!fs.existsSync(thumbPath)) {
                        fs.copyFileSync(srcPath, thumbPath)
                    }
                }

                return {
                    src: `/${gallery.folder}/${encodeURIComponent(filename)}`,
                    thumb: `/thumbs/${gallery.folder}/${thumbFilename}`,
                    isPortrait,
                }
            }))
        } catch (e) {
            console.warn('Sharp not available, using originals:', e.message)
            try {
                const files = fs.readdirSync(dir).filter(f => /\.(jpe?g|png|webp|gif)$/i.test(f))
                images = files.map(f => ({
                    src: `/${gallery.folder}/${encodeURIComponent(f)}`,
                    thumb: `/${gallery.folder}/${encodeURIComponent(f)}`,
                    isPortrait: false,
                }))
            } catch (_) { }
        }
    } else if (gallery.images) {
        images = gallery.images.map(img => {
            const srcUrl = typeof img === 'string' ? img : (img?.src || '')
            return { src: srcUrl, thumb: srcUrl, isPortrait: false }
        })
    }

    return {
        props: {
            gallery: {
                slug: gallery.slug,
                title: gallery.title,
                date: gallery.date || null,
                type: gallery.type || null,
                images,
            },
        },
    }
}
