import React, { useEffect, useState } from 'react'
import Image from '../Image/Image'
import WhatIDo from '../WhatIDo/WhatIDo'
import styles from './AboutScreen.module.css'

const AboutScreen = () => {
    const [timer, setTimer] = useState([
        "/images/FirstAbout.png",
    ])

    useEffect(() => setInterval(() => {
        const images = [
            "/images/FirstAbout.png",
            "/images/SecondAbout.png",
            "/images/ThirdAbout.png",
        ]

        let random = Math.floor(Math.random() * 3)
        setTimer(images[random])
    }, 6000), [])
    return (
        <>
            <section className={styles.AboutSection}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className={`${styles.aboutMyself}`}>About Myself
                            </h1>
                        </div>
                        <div className="col-md-6 text-center">
                            <img src={`${timer}`} className={styles.AboutImg} alt="" />

                        </div>
                        <div className="col-md-1">
                            <img src="/images/Line.png" className={styles.line} />
                        </div>
                        <div className="col-md-5">
                            <p className={`${styles.aboutTxt} col-md-10`}>A Software Developer enthusiast completed Bachelor Engineering in Computer Science. I am an individual who loves to learn new skills and can also work in a team. Looking forward to enhancing my skills, explore new challenges, and grow professionally. I have a great passion to do programming, develop apps, and websites. My goal is to utilize my skills for the development and growth of my organization with the help of new technologies. Experience in web development specializing in HTML, CSS , Bootstrap, Javascript, React, Angular, API, JSON, and web based applications.Well Knowledge of error detecting and finding the bugs.Experience in web maintenance and understanding in enhancement of requirements.</p>
                        </div>
                    </div>
                </div >
            </section>
            <WhatIDo />
        </>
    )
}

export default AboutScreen
