import styles from "./Skills.module.css";
import Image from "next/image";

const Card = ({ photo, title }) => {
    return (
        <div className={styles.card}>
            <Image
                src={photo}
                alt={title}
                height={100}
                width={100}
                className={styles.photo}
            />
            <h3>{title}</h3>
        </div>
    );
};

export default Card;
