import { useState } from "react";
import styles from "./About.module.css";

const About = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <div
                className={styles.container}
                id="about"
                style={{ height: isOpen ? "auto" : "15rem" }}
            >
                <h2 className={styles.sectionTitle}>About me</h2>
                <p>
                    Hi, there! I'm Angel, and I'm a self-taught front-end web
                    developer who never stops learning. Welcome to my personal
                    web porfolio. I would like to show you my work &#128513;.
                </p>
                <p>
                    Since I was little I was interested in technology. From the
                    age of 14 I started managing communities on Facebook,
                    creating content for fun and gaining followers. At the age
                    of 19, I saw a business opportunity there and began to
                    monetize visits through Google AdSense and the Facebook
                    Audience Network.
                </p>
                <p>
                    This is how one thing led to another, and I ended up
                    learning HTML and SEO copywriting to create better articles.
                    That was my first encounter with programming (Ok, I know
                    HTML is not a programming language, but I felt like a hacker
                    at the time, you know what I mean &#128527;).
                </p>
                <p>
                    As time passed I used my first income to replace my old
                    computer with the broken screen and its faulty keyboard,
                    Windows XP and 2GB of RAM. With my new computer I started to
                    learn new skills on my own. I learned to use Photoshop,
                    Paint Tool Sai, Sony Vegas, Audacity, etc.
                </p>
                <p>
                    I spent a lot of time working on things from home. I had to
                    reinvent myself several times to keep making money without
                    leaving home due to a powerful reason: My mother suffers
                    from a mental illness, Schizophrenia, for as long as I can
                    remember, and she cannot stay alone. My father works all day
                    away from home because he is a builder &#128170;. It was my
                    duty to stay and take care of the house, so I could not
                    start my university studies either.
                </p>
                <p>
                    Eventually, I was able to fulfill my goal of finishing my
                    Bachelor's in Accounting and Business Administration. And,
                    thanks to the time I spent alone, I developed a strong
                    self-taught instinct. I can say that everything I learned
                    was out of my own free will. Reading, looking for resources,
                    practicing until I improved my skills. I became a
                    professional Google searcher &#128514;.
                </p>
                <p>
                    In recent times I became passionate about web development
                    and have been learning and creating my own projects for a
                    long time. Right now I feel empowered to take wider
                    responsibilities and projects.
                </p>
                <p>
                    Hit me up, I would love for us to work together! &#x1F929;
                </p>
            </div>
            <button className={styles.btn} onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? "Close" : "See more"}
            </button>
        </>
    );
};

export default About;
