import "./password-input.styles.scss";

import lock from "../../../assets/images/inputs/lock.png";
import visible from "../../../assets/images/inputs/visible.png";
import invisible from "../../../assets/images/inputs/invisible.png";
import { useState } from "react";

function PasswordInput({ placeholder, value, onchange, lightmode }) {
    const [visibility, setVisibility] = useState(false);

    let type = "password";
    let logo = visible;

    if (visibility) {
        type = "text";
        logo = invisible;
    }
    return (
        <div
            className="input-container"
            style={lightmode ? { backgroundColor: "rgb(255, 255, 255)" } : {}}
        >
            <div className="image-container">
                <img src={lock} />
            </div>
            <input
                className="password-input"
                style={
                    lightmode
                        ? {
                              backgroundColor: "rgb(255, 255, 255)",
                              color: "rgb(0, 0, 0)",
                          }
                        : {}
                }
                placeholder={placeholder}
                type={type}
                value={value}
                onChange={onchange}
                required
            />
            <div
                className="visibility"
                onClick={() => {
                    setVisibility(!visibility);
                }}
            >
                <img src={logo} />
            </div>
        </div>
    );
}

export default PasswordInput;
