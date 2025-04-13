import styles from './Gallery.module.css'

export default function Gallery() {
    return (
        <section className={styles.gallery}>
            <h2>Galeria</h2>
            <div className={styles.grid}>
                {[1, 2, 3, 4, 5, 6].map(i => (
                    <div key={i} className={styles.item} style={{ backgroundImage: `url(/images/gallery${i}.jpg)` }} />
                ))}
            </div>
        </section>
    )
}
