import "./normal-input.styles.scss";

function NormalInput({ placeholder, icon, type }) {
    return (
        <div className="input-container">
            <div className="image-container">
                <img src={icon} />
            </div>
            <input
                className="normal-input"
                placeholder={placeholder}
                type={type}
                required
            />
        </div>
    );
}

export default NormalInput;
