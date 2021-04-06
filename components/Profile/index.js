import Image from "next/image";
import React, { useState } from 'react'
import { FaTimesCircle } from "react-icons/fa"
import styles from "./Profile.module.css";

const Profile = () => {
    const [isPicOpen, setIsPicOpen] = useState(false);

    return (
        <div className={styles.container}>
            <div className={styles.modal}
            style={{display: isPicOpen ? "block" : "none"}}>
                <Image
                    src="/img/profile.png"
                    alt="Angel Alemany"
                    layout="fill"
                    objectFit="cover"
                />
                <FaTimesCircle className={styles.close}
                onClick={() => setIsPicOpen(false)} />
            </div>
            <Image
                className={styles.photo}
                src="/img/profile.png"
                alt="Angel Alemany"
                width={250}
                height={250}
                onClick={() => setIsPicOpen(true)}
            />
            <div>
                <h1>Angel Alemany</h1>
                <h2>Frontend Web Developer</h2>
            </div>

            <div className={styles.wave1}></div>
            <div className={styles.wave2}></div>
            <div className={styles.wave3}></div>
        </div>
    );
};

export default Profile;
