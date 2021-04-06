import About from "../components/About";
import Info from "../components/Info";
import Layout from "../components/Layout";
import Nav from "../components/Nav";
import Profile from "../components/Profile";

export default function Home({ dark, setDark }) {
    return (
        <Layout dark={dark}>
            <Profile />
            <Info />
            <Nav dark={dark} setDark={setDark} />
            <About />
            <div style={{ height: "2000px" }}></div>
        </Layout>
    );
}
