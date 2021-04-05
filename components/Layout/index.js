const Layout = ({ children, dark, setDark }) => {
    return (
        <div
            style={{
                color: dark ? "#e2e2f2" : "#1e1f26",
                backgroundColor: dark ? "#1e1f26" : "#e2e2f2",
                minHeight: '100vh'
            }}
        >
            <main>{children}</main>
            <button onClick={() => setDark(!dark)}>Change theme</button>
        </div>
    );
};

export default Layout;
