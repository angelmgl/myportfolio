import { useState } from "react";
import Link from "next/link";
import { FaTimes, FaBars, FaSun, FaMoon } from "react-icons/fa";

//this is the navbar for the blog section
const Nav = ({ dark, setDark }) => {
    const [nav, setNav] = useState(false);

    return (
        <nav>
            {/*
            this is the button to open/close the menu in mobile
            */}
            <div className="bars" onClick={() => setNav(!nav)}>
                {nav ? <FaTimes /> : <FaBars />}
            </div>

            <ul className={`nav-links ${nav ? "active" : ""}`}>
                <li
                    className={`${nav ? "open" : ""}`}
                    onClick={() => setNav(!nav)}
                >
                    <Link href="/">
                        <a>Home</a>
                    </Link>
                </li>

                <li
                    className={`${nav ? "open" : ""}`}
                    onClick={() => setNav(!nav)}
                >
                    <Link href="/blog">
                        <a>Blog</a>
                    </Link>
                </li>

                <li
                    className={`${nav ? "open" : ""}`}
                    onClick={() => setNav(!nav)}
                >
                    <Link href="/#projects">
                        <a>Portfolio</a>
                    </Link>
                </li>

                <li
                    className={`${nav ? "open" : ""}`}
                    onClick={() => setNav(!nav)}
                >
                    <Link href="/#contact">
                        <a>Contact</a>
                    </Link>
                </li>

                <li
                    className={`${nav ? "open" : ""}`}
                    onClick={() => setNav(!nav)}
                >
                    <button
                        className="switchTheme"
                        onClick={() => setDark(!dark)}
                    >
                        {dark ? <FaSun /> : <FaMoon />}
                    </button>
                </li>
            </ul>

            <style jsx>{`
                nav {
                    width: auto;
                    height: 100%;
                    background-color: #183e77;
                    position: sticky;
                    top: 0;
                    z-index: 999;
                }

                nav .bars {
                    display: none;
                }

                .nav-links {
                    max-width: 1000px;
                    margin: 0 auto;
                }

                nav .nav-links {
                    width: 100%;
                    height: 100%;
                    display: flex;
                    justify-content: space-evenly;
                    align-items: center;
                }

                .nav-links li {
                    padding: 10px 25px;
                    transition: all 0.4s;
                    font-size: 1.75rem;
                    color: #e2e2f2;
                }

                .nav-links li:hover {
                    background-color: #182e55;
                }

                .switchTheme {
                    color: #dfaf4e;
                    background-color: transparent;
                    border: none;
                    outline: none;
                    font-size: 1.75rem;
                    transform: translateY(4px);
                    filter: drop-shadow(-2px -2px 3px rgba(255, 255, 255, 0.5))
                        drop-shadow(5px 5px 5px rgba(0, 0, 0, 0.3));
                }

                @media only screen and (max-width: 656px) {
                    nav {
                        z-index: 999;
                    }

                    nav .bars {
                        width: 60px;
                        height: 60px;
                        border-radius: 50%;
                        display: flex;
                        font-size: 2em;
                        color: #e2e2f2;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                        position: fixed;
                        right: 25px;
                        bottom: 25px;
                        box-shadow: 0px 0px 10px rgba(255, 255, 255, 0.25);
                        background-color: #183e77;
                        cursor: pointer;
                        z-index: 999;
                    }

                    nav .bars:hover {
                        background-color: #182e55;
                    }

                    nav .nav-links {
                        position: fixed;
                        background-color: #183e77;
                        margin: 0;
                        height: 100vh;
                        width: 100%;
                        left: 0;
                        top: 0;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                        transition: all 0.5s ease-out;
                        z-index: 500;
                        clip-path: circle(0px at 89% 92%);
                        -webkit-clip-path: circle(0px at 89% 92%);
                        pointer-events: none;
                    }

                    nav .nav-links.active {
                        clip-path: circle(1000px at 89% 92%);
                        -webkit-clip-path: circle(1000px at 89% 92%);
                        pointer-events: all;
                    }

                    nav .nav-links li {
                        font-size: 2rem;
                        opacity: 0;
                        cursor: pointer;
                    }

                    nav .nav-links li:nth-child(1) {
                        transition: all 0.4s ease 0.4s;
                    }

                    nav .nav-links li:nth-child(2) {
                        transition: all 0.4s ease 0.2s;
                    }

                    nav .nav-links li.open {
                        opacity: 1;
                    }
                }
            `}</style>
        </nav>
    );
};

export default Nav;
