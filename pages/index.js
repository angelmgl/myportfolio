import Head from "next/head";
import About from "../components/About";
import Info from "../components/Info";
import Layout from "../components/Layout";
import Nav from "../components/Nav";
import Profile from "../components/Profile";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Footer from "../components/Footer";

export default function Home({ dark, setDark }) {
    return (
        <>
            <Profile />
            <Info />
            <Nav dark={dark} setDark={setDark} />
            <Layout dark={dark}>
                <Head>
                    <title>Angel Alemany, Frontend Web Developer</title>
                    <meta
                        name="description"
                        content="Hi there! I'm a frontend web developer from Capiatá, Paraguay. Check out my work!"
                    />
                    <meta name="robots" content="index, follow" />
                    <meta
                        property="og:title"
                        content="Take a look at my portfolio!"
                    />
                    <meta property="og:image" content="/img/profile.png" />
                    <meta property="og:type" content="website" />
                    <meta
                        property="og:description"
                        content="Hi there! I'm a frontend web developer from Capiatá, Paraguay. Check out my work!"
                    />
                    <meta name="theme-color" content="#183e77" />
                </Head>
                <About />
                <Skills />
                <Projects />
            </Layout>
            <Footer />
        </>
    );
}
