import React from 'react'
import Cards from "../Cards/Cards"
import styles from "../Home/home.module.css"
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getAllGenres, getAllGames } from '../../redux/actions/actions'
import SideBar from '../SideBar/sidebar'
import SearchBar from '../SearchBar/SearchBar'
const Home = () => {

  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getAllGenres())
    dispatch(getAllGames())
  }, [dispatch])

  return (
    <div className={styles.homeContainer}>
      <div className={styles.bg}>
        <SearchBar className={styles.SearchBar}/>
        <SideBar className={styles.SideBar}></SideBar>
        <div className={styles.cardContainer}>
          <Cards className={styles.Cards}/>
        </div>
      </div>
    </div>
  )
}

export default Home;