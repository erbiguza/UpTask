import "./normal-input.styles.scss";

function NormalInput({ placeholder, icon, type, value, onchange }) {
    let clsname = "normal-input ";

    if (type !== "email") clsname += "space";
    return (
        <div className="input-container">
            <div className="image-container">
                <img src={icon} />
            </div>
            <input
                className={clsname}
                placeholder={placeholder}
                type={type}
                onChange={onchange}
                value={value}
                required
            />
        </div>
    );
}

export default NormalInput;
