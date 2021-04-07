import Image from "next/image";
import { FaExternalLinkAlt } from "react-icons/fa";
import styles from "./Projects.module.css";

const Card = ({
    title,
    even = false,
    desktop,
    mobile,
    children,
    link,
    tech,
}) => {
    return (
        <div className={styles.card}>
            <h3 className={styles.projectTitle}>{title}</h3>
            <div className={styles.cardBody}>
                <div
                    className={styles.caps} id="caps"
                >
                    <img
                        src={desktop}
                        alt={`${title} screenshot, desktop size`}
                        className={styles.desktop}
                    />
                    <img
                        src={mobile}
                        alt={`${title} screenshot, mobile size`}
                        className={styles.mobile}
                    />
                </div>
                <div className={styles.info}>
                    {children}

                    <a
                        href={link}
                        target="_blank"
                        rel="noreferrer"
                        className={styles.link}
                    >
                        Visit
                        <FaExternalLinkAlt className={styles.linkIcon} />
                    </a>

                    <div className={styles.tech}>
                        {tech.map((item) => (
                            <Image
                                key={item}
                                src={`/img/skills/${item}.png`}
                                alt={item}
                                width={40}
                                height={40}
                                className={styles.icon}
                            />
                        ))}
                    </div>
                </div>
            </div>

            <style jsx>{`
                #caps {
                    order: ${even ? "1" : "0"};
                    transform: ${even ? "translateX(-50px)" : "translateX(0px)"};
                }

                @media only screen and (max-width: 970px) {
                    #caps {
                        order: 0;
                        transform: translateX(0px);
                    }
                }
            `}</style>
        </div>
    );
};

export default Card;
