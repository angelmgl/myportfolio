import Layout from "../components/Layout";
import Profile from "../components/Profile";

export default function Home({ dark, setDark }) {
    return (
        <Layout dark={dark} setDark={setDark}>
            <Profile />
        </Layout>
    );
}
