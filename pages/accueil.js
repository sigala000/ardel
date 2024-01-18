import styles from "./page.module.css"
import Image from 'next/image'
import Drop from "../assets/Vector.svg"
import Sidebar from "./sidebar"
import { useRouter } from "next/router"
import Link from "next/link"
import axios from 'axios';
import React, { useEffect, useState } from 'react';
export default function Accueil() {

    const router = useRouter()

    const [menu,setMenu] = useState([{
        title:'Sanga',
        front_url:'http://localhost:3000/',
        back_url:'http://localhost:8000/'
    }])
    const [content,setContent] = useState({})

    useEffect(() => {
        axios.get('http://localhost:8000/api/')
        .then(res => {
           if (res.data.valid) {
                setContent(res.data)
                setMenu(res.data.menu)
           }
        }).catch(err => console.log(err))
    }, []);
    return (
        <>
            <Sidebar />
            <div className={styles.accueil}>
                <div className={styles.title_slogan}>
                    BIENVENU AU CTD
                </div>

                

                <div className={styles.countries}>
                    <div className={styles.count_itm}>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            Cameroun
                            <Image src={Drop} alt="Picture" className={styles.drop_link} />
                        </div>

                        <ul>
                            { 
                                menu.map( m => (
                                        <li className={styles.linkin}>
                                            <a onClick={() => router.push(`/regInformations?data=${encodeURIComponent("Littoral")}`)}>
                                            {m.title}
                                            </a>
                                        </li>
                                    )
                                ) 
                            }
                        </ul>
                    </div>

                    <div className={styles.informa_reg}>
                        Afficher les informations sur le Cameroun

                        {content.toString()}
                    </div>

                </div>
            </div>
        </>
    )
}