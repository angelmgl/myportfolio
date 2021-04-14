import Head from "next/head";
import Layout from "../../../components/Layout";
import NavBar from "../../../components/NavBar";
import Footer from "../../../components/Footer";
import Content from "./Content";

const Article = ({ dark, setDark }) => {
    return (
        <>
            <Head>
                <title>
                    Las mejores plataformas para conseguir trabajo remoto
                </title>
                <meta
                    name="description"
                    content="¿Estás buscando un trabajo remoto desde latinoamérica para
                    ganar experiencia como desarrollador? ¿Quieres trabajar
                    desde casa y ganar en dólares? Has llegado al lugar
                    correcto."
                />
                <meta name="robots" content="index, follow" />
                <meta
                    name="keywords"
                    content="Trabajo remoto, dólares, desarrollo web"
                />
                <meta
                    property="og:title"
                    content="Las mejores plataformas para conseguir trabajo remoto"
                />
                <meta property="og:image" content="/img/goals.svg" />
                <meta property="og:type" content="website" />
                <meta
                    property="og:description"
                    content="¿Estás buscando un trabajo remoto desde latinoamérica para
                    ganar experiencia como desarrollador? ¿Quieres trabajar
                    desde casa y ganar en dólares? Has llegado al lugar
                    correcto."
                />
                <meta name="theme-color" content="#183e77" />
            </Head>
            <NavBar dark={dark} setDark={setDark} />
            <Layout dark={dark}>
                <div className="container">
                    <Content />
                </div>
            </Layout>
            <Footer />

            <style jsx>{`
                .container {
                    padding: 1rem;
                }
            `}</style>
        </>
    );
};

export default Article;
