import styles from "./Projects.module.css";
import Card from "./Card";

const Projects = () => {
    return (
        <div className={styles.container} id="projects">
            <h2 className={styles.sectionTitle}>Projects</h2>

            <Card
                title="Rick and Morty App"
                desktop="/img/projects/rick-and-morty-desktop.png"
                mobile="/img/projects/rick-and-morty-mobile.png"
                link="https://angelmgl.github.io/rick-and-morty/"
                github="https://github.com/angelmgl/rick-and-morty/"
                tech={["css", "js", "react"]}
            >
                <p style={{ marginTop: "0" }}>
                    CSR Website built on React js, consume the data from&nbsp;
                    <a
                        href="https://rickandmortyapi.com/"
                        target="_blanck"
                        rel="noreferrer"
                    >
                        rickandmortyAPI
                    </a>
                    . Contains detailed information about all Rick and Morty
                    characters, cards, and a real-time search input.
                </p>
            </Card>

            <Card
                title="Dolar PY"
                even={true}
                desktop="/img/projects/dolarpy-desktop.png"
                mobile="/img/projects/dolarpy-mobile.png"
                link="https://dolarpy.vercel.app/"
                github="https://github.com/angelmgl/dolarpy/"
                tech={["css", "react", "next"]}
            >
                <p style={{ marginTop: "0" }}>
                    SSR Website built on Next js, consume the data from&nbsp;
                    <a
                        href="https://dolar.melizeche.com/api/1.0/"
                        target="_blanck"
                        rel="noreferrer"
                    >
                        melizeche API
                    </a>
                    . It contains the price of the dollar in guaraníes (official
                    currency of Paraguay), always updated, includes an
                    integrated calculator.
                </p>
            </Card>

            <Card
                title="My portfolio"
                desktop="/img/projects/portfolio-desktop.png"
                mobile="/img/projects/portfolio-mobile.png"
                link="https://portfolio-angelmgl.vercel.app/"
                github="https://github.com/angelmgl/myportfolio/"
                tech={["css", "react", "next"]}
            >
                <p style={{ marginTop: "0" }}>
                    SSR Website built on Next js, entirely designed and
                    developed by me. It includes my profile, contact information,
                    my work and a blog section.
                </p>
            </Card>

            <style jsx>{`
                p a {
                    color: #183e77;
                }
            `}</style>
        </div>
    );
};

export default Projects;
