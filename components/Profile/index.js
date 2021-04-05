import Image from "next/image";
import styles from "./Profile.module.css";

const Profile = () => {
    return (
        <div className={styles.container}>
            <Image
                className={styles.photo}
                src="/img/profile.png"
                alt="Angel Alemany"
                width={250}
                height={250}
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
