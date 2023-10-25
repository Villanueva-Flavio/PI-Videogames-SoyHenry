import React from 'react'
import styles from "../NotFound/notfound.module.css"
import StartButton from "../StartButton/startbutton"

const NotFound = () => {
  
  return (
    <div className={styles.notfound}>
        <h1>Error 404</h1>
        <p>El directorio al que querés acceder no existe.</p>
        <p>Presioná el botón <StartButton></StartButton></p>
      </div>
 )
}
export default NotFound