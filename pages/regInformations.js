import styles from "../styles/region.module.css"
import Sidebar from "./sidebar"
import Image from 'next/image'
import Drop from "../assets/Vector.svg"
import Drop2 from "../assets/Vector2.svg"
import { useState } from "react"
import { useRouter } from "next/router"

 const Region = () =>  {

    const [currentLink, setCurrentLink] = useState();
    const router = useRouter()
    const receivedData = router.query.data || 'null';

    return (
        <>
            <Sidebar />
            <div className={styles.accueil}>
                <div className={styles.onglets}>
                    <div className={styles.ong}>ODD</div>
                    <div className={styles.ong}>Secteurs</div>
                    <div className={styles.ong}>Ministère</div>
                    <div className={styles.ong}>Finances</div>
                    <div className={styles.ong}>RH</div>
                </div>
                <div className={styles.path}>
                    Cameroun <Image src={Drop2} alt="Picture" className={styles.drop_link} width={8} /> {receivedData}
                </div>
                <div className={styles.countries}>
                    <div className={currentLink === 1 ? styles.count_itm : "none"} onClick={() => { setCurrentLink(1); console.log(currentLink) }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            {receivedData}
                            <Image src={Drop} alt="Picture" className={styles.drop_link} />
                        </div>
                        <ul>
                            <li className={styles.linkin}>
                                <a href="#">Adamaoua dep 1</a>
                            </li>
                            <li className={styles.linkin}>
                                <a href="#">Adamaoua dep 2</a>
                            </li>
                            <li className={styles.linkin}>
                                <a href="#">Adamaoua dep 3</a>
                            </li>
                            <li className={styles.linkin}>
                                <a href="#">Adamaoua dep 4</a>
                            </li>
                            <li className={styles.linkin}>
                                <a href="#">Adamaoua dep 5</a>
                            </li>
                            <li className={styles.linkin}>
                                <a href="#">Adamaoua dep 5</a>
                            </li>
                            <li className={styles.linkin}>
                                <a href="#">Adamaoua dep 6</a>
                            </li>
                        </ul>
                    </div>
                </div>


                <div className={styles.informa_reg}>
                    Afficher les informations sur {receivedData}
                </div>

            </div>
        </>
    )
}

export default Region