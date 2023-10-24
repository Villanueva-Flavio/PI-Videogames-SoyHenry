import React, { useEffect, useState } from 'react';
import styles from './details.module.css';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

const Details = () => {
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
    <div className={styles.details}>
      <div className={styles.detailsText}>
        <h1>{game.name}</h1>
        <h3>Genres: {game.genres}</h3>
        <h3>Rating: {game.rating}</h3>
        <h3>Platforms: {game.platforms}</h3>
        <h3>Release Date: {game.released}</h3>
        <h3>Description: {game.description}</h3>
        <img src={game.background_image} alt="Game" />
        <Link to="/home">
          <button>Back</button>
        </Link>
      </div>
    </div>
  );
};

export default Details;
