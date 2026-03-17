import "./welcome.styles.scss";

function Welcome({ title, description, button, onclick }) {
    return (
        <>
            <div className="whole-container">
                <div className="welcome-section">
                    <h1>{title}</h1>
                    <h3>{description}</h3>
                </div>
                {button ? (
                    <div className="button-container">
                        <button
                            className="welcome-componentBtn"
                            onClick={onclick}
                        >
                            {button}
                        </button>
                    </div>
                ) : (
                    <div></div>
                )}
            </div>
        </>
    );
}

export default Welcome;
