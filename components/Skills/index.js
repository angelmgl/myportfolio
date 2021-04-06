import Card from "./Card";
import styles from "./Skills.module.css";

const Skills = () => {
    return (
        <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Skills</h2>
            <div className={styles.wrapper}>
                <Card photo="/img/skills/html.png" title="HTML" />
                <Card photo="/img/skills/css.png" title="CSS" />
                <Card photo="/img/skills/sass.png" title="Sass" />
                <Card photo="/img/skills/js.png" title="JavaScript" />
                <Card photo="/img/skills/react.png" title="React" />
                <Card photo="/img/skills/next.png" title="Next" />
                <Card photo="/img/skills/node.png" title="Node" />
                <Card photo="/img/skills/npm.png" title="npm" />
            </div>
        </div>
    );
};

export default Skills;
