import React from 'react';
import styles from './Preloader.module.css';
import { FaTheaterMasks } from 'react-icons/fa';

const LoadingIndicator = ({ loading }) => {
    return (
        <div
            style={{ opacity: loading ? 1 : 0, zIndex: loading ? 9999 : -1 }}
            className={styles.preloader}
        >
            <div className={styles.content}>
                <div className={styles.logoWrapper}>
                    <div className={styles.spinnerOuter}></div>
                    <div className={styles.spinnerMiddle}></div>
                    <div className={styles.logoIcon}>
                        <FaTheaterMasks />
                    </div>
                </div>
                <h2 className={styles.title}>
                    CTM <span className={styles.accent}>Movimento</span>
                </h2>
                <div className={styles.dots}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </div>
    );
};

export default LoadingIndicator;