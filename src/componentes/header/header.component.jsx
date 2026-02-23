import "./header.styles.scss";
import logo from "../../assets/images/icons/logo.png";
import m_userprofile from "../../assets/images/userprofile/m_userprofile.png";
import f_userprofile from "../../assets/images/userprofile/f_userprofile.png";
import light_mode from "../../assets/images/icons/light_mode.png";
import dark_mode from "../../assets/images/icons/dark_mode.png";

import { useState } from "react";

function Header() {
    const [dark, setDark] = useState(false);

    const toggleMode = () => {
        setDark(!dark);
    };

    return (
        <>
            <header>
                <div className="logo-container">
                    <img src={logo} alt="logo"></img>
                </div>
                <div className="right-side">
                    <div className="view-mode">
                        <img
                            onClick={toggleMode}
                            src={dark ? dark_mode : light_mode}
                        />
                    </div>
                    <div className="profile-container">
                        <img src={m_userprofile} />
                        <span className="username">Ardit</span>
                    </div>
                </div>
            </header>
        </>
    );
}

export default Header;
