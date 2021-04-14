import ARTICLES from "../../articles";
import Layout from "../../components/Layout";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import Thumbnail from "./Thumbnail";

const Blog = ({ dark, setDark }) => {
    return (
        <>
            <NavBar dark={dark} setDark={setDark} />
            <Layout dark={dark}>
                <div>
                    {ARTICLES.map((article) => (
                        <Thumbnail
                            title={article.title}
                            url={article.url}
                            description={article.description}
                            image={article.image}
                        />
                    ))}
                </div>
            </Layout>
            <Footer />

            <style jsx>{`
                div {
                    padding: 2rem 0;
                }
            `}</style>
        </>
    );
};

export default Blog;
