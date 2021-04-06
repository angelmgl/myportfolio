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
                    transition: all 0.5s;
                    box-shadow: -3px -3px 2px rgba(255, 255, 255, 0.4),
                                5px 5px 7px rgba(0, 0, 0, 0.3);
                }

                button:hover {
                    background-color: ${primary ? "#182E55" : "#b2b2c2"};
                    box-shadow: 3px 3px 2px rgba(255, 255, 255, 0.4),
                                -3px -3px 5px rgba(0, 0, 0, 0.3);
                }
            `}</style>
        </>
    );
}
