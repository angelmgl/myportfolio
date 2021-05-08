import { FaAward } from "react-icons/fa";
import Card from "./Card";
import styles from "./Skills.module.css";

const Skills = () => {
    return (
        <section className={styles.container} id="skills">
            <h2 className={styles.sectionTitle}>Skills</h2>
            <div className={styles.studies}>
                <div className={styles.study}>
                    <FaAward className={styles.award} />
                    <div className={styles.info}>
                        <h3>Especialization: User Experience Research and Design</h3>
                        <p style={{margin: "0.5rem 0"}}>University of Michigan - Coursera</p>
                        <a
                            href="https://www.coursera.org/account/accomplishments/specialization/certificate/XRA9FD3K8ZR3"
                            target="_blank"
                            rel="noreferrer"
                            className={styles.link}
                        >
                            View certificate
                        </a>
                    </div>
                </div>
                <div className={styles.study}>
                    <FaAward className={styles.award} />
                    <div className={styles.info}>
                        <h3>Especialization: Full Stack Web Development with React</h3>
                        <p style={{margin: "0.5rem 0"}}>
                            The Hong Kong University of Science and Technology -
                            Coursera
                        </p>
                        <a
                            href="https://www.coursera.org/account/accomplishments/specialization/certificate/YGQUNN64E7WG"
                            target="_blank"
                            rel="noreferrer"
                            className={styles.link}
                        >
                            View certificate
                        </a>
                    </div>
                </div>
            </div>
            <div className={styles.wrapper}>
                <Card photo="/img/skills/html.png" title="HTML" />
                <Card photo="/img/skills/css.png" title="CSS" />
                <Card photo="/img/skills/sass.png" title="Sass" />
                <Card photo="/img/skills/javascript.png" title="JavaScript" />
                <Card photo="/img/skills/react.png" title="React" />
                <Card photo="/img/skills/next.png" title="Next" />
                <Card photo="/img/skills/node.png" title="Node" />
                <Card photo="/img/skills/npm.png" title="npm" />
                <Card photo="/img/skills/express.png" title="Express" />
                <Card photo="/img/skills/git.png" title="Git" />
                <Card photo="/img/skills/bootstrap.png" title="Bootstrap" />
                <Card photo="/img/skills/figma.png" title="Figma" />
                <Card photo="/img/skills/photoshop.png" title="Photoshop" />
                <Card photo="/img/skills/wordpress.png" title="Wordpress" />
                <Card photo="/img/skills/mysql.png" title="MySQL" />
                <Card photo="/img/skills/mongodb.png" title="MongoDB" />
            </div>
        </section>
    );
};

export default Skills;
