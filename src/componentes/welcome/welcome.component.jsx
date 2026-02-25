import "./welcome.styles.scss";

function Welcome({ title, description }) {
    return (
        <div className="welcome-section">
            <h1>{title}</h1>
            <h3>{description}</h3>
        </div>
    );
}

export default Welcome;
