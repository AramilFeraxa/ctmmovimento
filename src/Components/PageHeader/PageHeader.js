import styles from './PageHeader.module.css'
import defaultImage from '../../assets/images/headerImage.png'

export default function PageHeader({ title, subtitle, backgroundImage }) {
    return (
        <header className={styles.header}>
            <img
                src={backgroundImage?.src || defaultImage?.src}
                className={styles.backgroundImage}
                alt="Background"
            />
            <div className={styles.content}>
                <h1>{title}</h1>
                {subtitle && <p>{subtitle}</p>}
            </div>
        </header>
    )
}
