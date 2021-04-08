import styles from "./Footer.module.css";

const Footer = () => {
    return (
        <div className={styles.container}>
            <p className={styles.text}>Made with love and a lot of JS.</p>
            <p className={styles.text}>Angel Mgl 2021&copy;</p>
        </div>
    )
}

export default Footer;