import Link from "next/link";
import styles from "./Contact.module.css";

const Contact = () => {
    return (
        <section className={styles.container}>
            <img src="/img/message.svg" alt="message" className={styles.svg} />
            <div className={styles.contact}>
                <h2>Interested in working together?</h2>
                <p>
                    I’m always open to collaborate in projects or job
                    opportunities.
                </p>
                <Link href="/contact-me">
                    <a className={styles.link}>Let's chat for a while!</a>
                </Link>
            </div>
        </section>
    );
};

export default Contact;
