import { useState } from "react";
import "./setting-card.styles.scss";

import arrow from "../../assets/images/icons/arrow.png";

function SettingCard({ title, description, children }) {
    const [active, setActive] = useState(false);

    const toggleActive = () => {
        setActive(!active);
    };

    let className = "";
    if (active) {
        className += "active";
    }

    return (
        <div className={`setting-card ${className}`}>
            <div className="first-row">
                <div className="text">
                    <h2>{title}</h2>
                    <h4>{description}</h4>
                </div>
                <div
                    className={`arrow-container ${className}`}
                    onClick={toggleActive}
                >
                    <img src={arrow} />
                </div>
            </div>

            <div className="input-form">{children}</div>
        </div>
    );
}

export default SettingCard;
