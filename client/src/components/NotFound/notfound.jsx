import React from 'react'
import styles from "../NotFound/notfound.module.css"
import StartButton from "../StartButton/startbutton"
const notfound = () => {
  
  return (
    <div className={styles.notfound}>
            <div class="noise"></div>
      <div class="overlay"></div>
      <div class="terminal">
        <h1>Error <span class="errorcode">404</span></h1>
        <p class="output">El directorio al que querés acceder no existe.</p>
        <p class="output">Presioná el botón <StartButton></StartButton></p>
      </div>
    </div>
 )
}
export default notfound