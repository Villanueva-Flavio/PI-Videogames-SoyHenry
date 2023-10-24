import React from "react";
import styles from './Card.module.css'
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { NavLink } from "react-router-dom";

const Card = () => {
    const [game, setGame] = useState({});
    const { id } = useParams();
  
    useEffect(() => {
      axios.get(`http://localhost:3001/videogames/${id}`)
        .then((res) => {
          setGame(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }, [id]);

        return (
            <div className={styles.card}>
                <img src={game.image} width="400px" height="250px" alt=""/>
                <div className={styles.card-content}>
                    <h3 className={styles.name}>{game.name}</h3>
                    <p className={styles.genres}>{game.genres}</p>
                    <p className={styles.rating}>⭐ {game.rating}</p>
                 <NavLink to={`/detail/${game.id}`} className={styles.navLink}><span className={styles.leer_mas}>Leer más</span></NavLink>
             </div>
            </div>
        )

}

export default Card