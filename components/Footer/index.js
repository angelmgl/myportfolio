import styles from "./Footer.module.css";

const Footer = () => {
    return (
        <footer className={styles.container}>
            <div className={styles.innerContainer}>
                <p className={styles.text}>Made with love and a lot of JS.</p>
                <p className={styles.text}>Angel Mgl 2021&copy;</p>
            </div>
        </footer>
    );
};

export default Footer;
