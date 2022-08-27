import styles from '../styles/Start.module.css'
import Button from '../components/Button'

export default function Start(){   
    return(

        <div className={styles.center}>
            <div className={styles.me}>
                <div className={styles.Name}>
                    <h1 className={styles.MyName}>Matheus Ribeiro</h1>
                </div>
                <div className={styles.Area}>
                    <h1 className={styles.MyArea}>Web Developer</h1>
                </div>
            </div>
            <div className={styles.buttonsContainer}>
                <div className={styles.buttons}>   
                    <Button name = "About Me"></Button>
                    <Button name = "Jobs"></Button>
                    <Button name = "Study"></Button>
                    <Button name = "Weather"></Button>
                </div> 
            </div>
        </div>
    )
}