import "./normal-input.styles.scss";

function NormalInput({ placeholder, icon, type, value, onchange }) {
    let clsname = "normal-input ";

    if (type === "fullname") clsname += "space";
    return (
        <div className="input-container">
            {icon ? (
                <div className="image-container">
                    <img src={icon} />
                </div>
            ) : (
                <></>
            )}
            <input
                className={clsname}
                placeholder={placeholder}
                type={type == "email" ? "email" : "text"}
                onChange={onchange}
                value={value}
                required
            />
        </div>
    );
}

export default NormalInput;
