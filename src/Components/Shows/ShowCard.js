import React from "react";
import styles from "./ShowCard.module.css";
import formatDate from "../../utils/formatDate";

const ShowCard = ({ i, show }) => {
    return (
        <div key={i} className={styles.card}>
            <img src={show.poster} alt={show.title} className={styles.poster} />
            <h3>{show.title}</h3>
            <span className={styles.category}>{show.category}</span>
            <p><strong>{formatDate(show.date)}</strong></p>
            <p>{show.desc}</p>
            <p className={styles.location}>
                <i className="fas fa-map-marker-alt"></i> {show?.location || "MDK Czechowice-Dziedzice"}
            </p>
        </div>
    )
}

export default ShowCard;