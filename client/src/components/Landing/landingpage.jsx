import styles from "../Landing/landingpage.module.css"
import StartButton from "../StartButton/startbutton"
import zeroTwo from "../../assets/background-image.png"
import thePozzard from "../../assets/ThePozzards.png"
import {React} from 'react'

const landing = () => {
  
  return (
    <div>
      <div className={styles.landingPage}>
       <div className={styles.mainContainer}>
            <img className={styles.zeroTwo} src={zeroTwo} alt="zeroTwo"></img>
            <img className={styles.thePozzard} src={thePozzard} alt="thePozzard"></img>
            <h1 className={styles.subtitle}><span className={styles.bold}>Checkpoint</span> 🏁 </h1>
            <StartButton> </StartButton>
        </div> 
        </div>
    </div>
  )
}

export default landing
