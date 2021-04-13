import {
    FaGithub,
    FaTwitter,
    FaLinkedin,
    FaMapMarkerAlt,
    FaBirthdayCake,
    FaCoffee,
    FaFlask,
} from "react-icons/fa";
import styles from "./Info.module.css";

const Info = () => {
    return (
        <section className={styles.wrapper}>
            <div className={styles.container}>
                <ul className={styles.info}>
                    <li>
                        <FaMapMarkerAlt />
                        <span className={styles.data}>Capiatá, Paraguay</span>
                    </li>
                    <li>
                        <FaBirthdayCake />
                        <span className={styles.data}>23 years old</span>
                    </li>
                    <li>
                        <FaFlask />
                        <span className={styles.data}>UX design</span>
                    </li>
                    <li>
                        <FaCoffee />
                        <span className={styles.data}>Freelancer</span>
                    </li>
                </ul>
                <div className={styles.social}>
                    <a
                        href="https://github.com/angelmgl/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FaGithub className={styles.socialIcon} />
                    </a>
                    <a
                        href="https://twitter.com/angelmgljpr/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FaTwitter className={styles.socialIcon} />
                    </a>
                    <a
                        href="https://linkedin.com/in/angelmgl/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FaLinkedin className={styles.socialIcon} />
                    </a>
                </div>
                <div className={styles.btn}>
                    <a href="#contact" className={styles.link}>
                        Message
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Info;
