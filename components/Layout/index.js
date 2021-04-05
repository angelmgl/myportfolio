const Layout = ({ children, dark, setDark }) => {
    return (
        <div
            style={{
                color: dark ? "#e2e2f2" : "#1e1f26",
                backgroundColor: dark ? "#1e1f26" : "#e2e2f2",
            }}
            className="outerContainer"
        >
            <button onClick={() => setDark(!dark)}>Change theme</button>
            <main>{children}</main>

            <style jsx>{`
                .outerContainer {
                    min-height: 100vh;
                }

                main {
                    width: 100%;
                    max-width: 1000px;
                    margin: 0 auto;
                }

                button {
                    position: absolute;
                }
            `}</style>
        </div>
    );
};

export default Layout;
