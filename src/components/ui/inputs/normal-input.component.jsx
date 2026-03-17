import "./normal-input.styles.scss";

function NormalInput({ placeholder, icon, type, value, onchange, lightmode }) {
    let clsname = "normal-input ";

    if (type === "fullname") clsname += "space";
    return (
        <div
            className="input-container"
            style={lightmode ? { backgroundColor: "rgb(255, 255, 255)" } : {}}
        >
            {icon ? (
                <div className="image-container">
                    <img src={icon} />
                </div>
            ) : (
                <></>
            )}
            <input
                className={clsname}
                style={
                    lightmode
                        ? {
                              backgroundColor: "rgb(255, 255, 255)",
                              color: "rgb(0, 0, 0)",
                          }
                        : {}
                }
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
