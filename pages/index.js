import About from "../components/About";
import Info from "../components/Info";
import Layout from "../components/Layout";
import Nav from "../components/Nav";
import Profile from "../components/Profile";
import Skills from "../components/Skills";

export default function Home({ dark, setDark }) {
    return (
        <Layout dark={dark}>
            <Profile />
            <Info />
            <Nav dark={dark} setDark={setDark} />
            <About />
            <Skills />
            <div style={{ height: "2000px" }}></div>
        </Layout>
    );
}
