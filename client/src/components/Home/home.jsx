import React from 'react'
import Cards from "../Cards/Cards"
import styles from "../Home/home.module.css"
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getAllGenres, getAllGames } from '../../redux/actions/actions'
import SideBar from '../SideBar/sidebar'
const Home = () => {

  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getAllGenres())
    dispatch(getAllGames())
  }, [dispatch])

  return (
    <div>
      <SideBar></SideBar>
    <div className={styles.cardContainer}>
      <Cards/>
    </div>
    </div>
  )
}

export default Home;