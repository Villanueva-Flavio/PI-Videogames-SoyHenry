import React from 'react'
import { useDispatch } from 'react-redux'
import { getAllGames, getGamesByGenre, getGamesByPlatform} from '../../redux/actions/actions.js'
import styles from './sidebar.module.css'
import { useEffect, useState} from 'react'
import axios from 'axios'

function FilterByGenre() {
    const [genres, setGenres] = useState([]);
    const dispatch = useDispatch();
  
    function handleFilterByGenre(e) {
      dispatch(getGamesByGenre({ genre: e.target.value }));
    }
  
    useEffect(() => {
      axios.get('http://localhost:3001/genre')
        .then((response) => {
          const data = response.data;
          setGenres(data);
        })
        .catch((error) => {
          console.error('Error al obtener los géneros desde la API:', error);
        });
    }, []);
  
    return (
      <div className={styles.subContainer}>
        <select className={styles.selects} onChange={handleFilterByGenre}>
          {genres.map((genre) => (
            <option key={genre} value={genre}>
              {genre}
            </option>
          ))}
        </select>
      </div>
    );
  }

function FilterByPlatform() {
    const [platforms, setPlatforms] = useState([]);
    const dispatch = useDispatch();
  
    function handleFilterByPlatform(e) {
      dispatch(getGamesByPlatform({ platform: e.target.value }));
    }
  
    useEffect(() => {
      axios.get('http://localhost:3001/platforms')
        .then((response) => {
          const data = response.data;
          setPlatforms(data);
        })
        .catch((error) => {
          console.error('Error al obtener las plataformas desde la API:', error);
        });
    }, []);
  
    return (
      <div className={styles.subContainer}>
        <select className={styles.selects} onChange={handleFilterByPlatform}>
          {platforms.map((platform) => (
            <option key={platform} value={platform}>
              {platform}
            </option>
          ))}
        </select>
      </div>
    );
  }

const FilterCreated = () => {
    const dispatch = useDispatch()

    function handleFilterCreated(e) {
        dispatch(getAllGames({ created: e.target.value }))
    }

    return (
        <div className={styles.subContainer}>
            <select className={styles.selects} onChange={(e) => handleFilterCreated(e)}>
                <option value="all">All Games</option>
                <option value="api">Created by API</option>
                <option value="db">Created by DB</option>
            </select>
        </div>
    )
}

export { FilterByPlatform, FilterByGenre, FilterCreated }