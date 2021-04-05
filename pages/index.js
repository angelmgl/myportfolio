import Layout from "../components/Layout";

export default function Home({ dark, setDark }) {
    return (
        <Layout dark={dark} setDark={setDark}>
            <h1>Hello world</h1>
        </Layout>
    );
}
