export default function Button({ primary = true, text }) {

    return (
        <>
            <button>
                {text}
            </button>

            <style jsx>{`
                button {
                    background-color: ${primary ? "#183E77" : "#e2e2f2"};
                    color: ${primary ? "#e2e2f2" : "#183E77"};
                    width: 250px;
                    font-size: 24px;
                    border-radius: 10px;
                    padding: 10px 0;
                    border: none;
                    outline: none;
                    cursor: pointer;
                }

                button:hover {
                    background-color: ${primary ? "#182E55" : "#b2b2c2"};
                }
            `}</style>
        </>
    );
}
