import Link from "next/link";

const Thumbnail = ({ title, url, image, description, date, tags = [] }) => {
    return (
        <Link href={`/blog/${url}`}>
            <article>
                <img src={image} alt={title} />
                <div className="details">
                    <h2>{title}</h2>
                    <p>
                        <small>{date}</small> - &nbsp;
                        <small>{tags.join(", ")}</small>
                    </p>
                    <p>{description}</p>
                </div>

                <style jsx>{`
                    article {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        border: 1px solid #183e77;
                        border-radius: 10px;
                        padding: 1rem;
                        transition: all 0.5s;
                        cursor: pointer;
                    }

                    article:hover {
                        background-color: rgba(0, 0, 0, 0.25);
                    }

                    img {
                        max-width: 220px;
                        margin-right: 1rem;
                    }

                    @media only screen and (max-width: 768px) {
                        article {
                            flex-direction: column;
                        }
                    }
                `}</style>
            </article>
        </Link>
    );
};

export default Thumbnail;
