import React from 'react'
import styles from "./Card.module.css"
import { NavLink } from 'react-router-dom/cjs/react-router-dom'
const Card = ({id,name,platforms,rating,genres,image}) => {
    const formattedPlatforms = platforms.join(", ");
    const formattedGenres = genres.join(", ");
    return (
    <div className={styles.cardContainer}>
        <NavLink to={`/details/${id}`}>
            <div className={styles.card}>
                <h1 className={styles.name}>{name}</h1>
                <h1 className={styles.genres}>{formattedGenres}</h1>
                <h4 className={styles.rating}>{rating}</h4>
                <img className={styles.image} src={image} alt={image}></img>
                <h3 className={styles.platforms}>{formattedPlatforms}</h3>
                <h3 className={styles.ver}>Ver más</h3>
            </div>
        </NavLink>
    </div>
  )
}

export default Card