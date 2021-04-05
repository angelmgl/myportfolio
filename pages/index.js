import Layout from "../components/Layout";
import Nav from "../components/Nav";
import Profile from "../components/Profile";

export default function Home({ dark, setDark }) {
    return (
        <Layout dark={dark}>
            <Profile />
            <Nav dark={dark} setDark={setDark} />
            <div style={{ height: "2000px" }}></div>
        </Layout>
    );
}
