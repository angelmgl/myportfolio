import { useState } from "react";
import { FaTimes, FaBars } from "react-icons/fa";

const Nav = ({ dark, setDark }) => {
    const [nav, setNav] = useState(false);

    return (
        <nav>
            <div className="bars" onClick={() => setNav(!nav)}>
                {nav ? <FaTimes /> : <FaBars />}
            </div>
            <ul className={`nav-links ${nav ? "active" : ""}`}>
                <li
                    className={`${nav ? "open" : ""}`}
                    id="home"
                    onClick={() => setNav(!nav)}
                >
                    Item 1
                </li>
                <li
                    className={`${nav ? "open" : ""}`}
                    onClick={() => setNav(!nav)}
                >
                    Item 2
                </li>
                <li
                    className={`${nav ? "open" : ""}`}
                    onClick={() => setNav(!nav)}
                >
                    Item 3
                </li>
                <li
                    className={`${nav ? "open" : ""}`}
                    onClick={() => setNav(!nav)}
                >
                    Item 4
                </li>
                <li
                    className={`${nav ? "open" : ""}`}
                    onClick={() => setNav(!nav)}
                >
                    <button onClick={() => setDark(!dark)}>Change theme</button>
                </li>
            </ul>

            <style jsx>{`
                nav {
                    width: auto;
                    height: 100%;
                    background-color: #183e77;
                    position: sticky;
                    top: 0;
                }

                nav .bars {
                    display: none;
                }

                nav .nav-links {
                    width: 100%;
                    height: 100%;
                    display: flex;
                    justify-content: space-evenly;
                    align-items: center;
                    z-index: 9;
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

                @media only screen and (max-width: 576px) {
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
                        clip-path: circle(0px at 90% 92%);
                        -webkit-clip-path: circle(0px at 90% 92%);
                        pointer-events: none;
                    }

                    nav .nav-links.active {
                        clip-path: circle(1000px at 85% 92%);
                        -webkit-clip-path: circle(1000px at 85% 92%);
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