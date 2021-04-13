import { FaTelegramPlane, FaEnvelope } from "react-icons/fa";
import styles from "./Contact.module.css";

const Contact = () => {
    return (
        <section className={styles.container} id="contact">
            <img src="/img/message.svg" alt="message" className={styles.svg} />
            <div className={styles.contact}>
                <h2 style={{ fontSize: "2rem" }}>
                    Interested in working together?
                </h2>
                <p style={{ fontSize: "1.5rem" }}>
                    I’m always open to collaborate in projects or job
                    opportunities.
                </p>
                <a
                    href="https://t.me/angelmgl"
                    target="_blank"
                    rel="noreferrer"
                    className={styles.link}
                >
                    <FaTelegramPlane className={styles.telegram} />
                    Hit me up on Telegram!
                </a>
                <a
                    href="mailto:angelemegeele@gmail.com?Subject=I'd%20like%20to%20talk%20with%20you"
                    rel="noreferrer"
                    className={styles.link}
                >
                    <FaEnvelope className={styles.email} />
                    Hit me up by email!
                </a>
            </div>
        </section>
    );
};

export default Contact;
