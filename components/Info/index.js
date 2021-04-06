import {
    FaGithub,
    FaTwitter,
    FaLinkedin,
    FaMapMarkerAlt,
    FaBirthdayCake,
    FaCoffee,
} from "react-icons/fa";
import Button from "../components/Button";
import styles from "./Info.module.css";

const Info = () => {
    return (
        <section className={styles.section}>
            <div className={styles.wrapper}>
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
                        <FaCoffee />
                        <span className={styles.data}>Freelancer</span>
                    </li>
                </ul>
                <div className={styles.social}>
                    <FaGithub className={styles.socialIcon} />
                    <FaTwitter className={styles.socialIcon} />
                    <FaLinkedin className={styles.socialIcon} />
                </div>
            </div>
            <Button text="Contact me!" />
        </section>
    );
};

export default Info;
