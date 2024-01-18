import styles from '../styles/sidebar.module.css'
import Logo from "../assets/Logo.png"
import Image from 'next/image'

export default function sidebar() {
    return (
     <div className={styles.sidebar}>
        <div className={styles.logo_name}>
          <Image
            src={Logo}
            alt="Picture"
            // width={500} automatically provided
            // height={500} automatically provided
            // blurDataURL="data:..." automatically provided
            // placeholder="blur" // Optional blur-up while loading
          />
          <div className={styles.name}>
            ArrdelBee <span>territorial digital</span>
          </div>
        </div>
        <div className={styles.links}>
          <a href='#'> Visualisation des données  </a>
        </div>
    </div>
    )
  }