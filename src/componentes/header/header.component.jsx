import "./header.styles.scss";
import logo from "../../assets/images/icons/logo.png";
import light_mode from "../../assets/images/icons/light_mode.png";
import dark_mode from "../../assets/images/icons/dark_mode.png";

import { useNavigate } from "react-router-dom";
import { darkmodeSelector } from "../../redux/darkmode/darkmodeSelector";
import { useDispatch } from "react-redux";
import { setDarkMode } from "../../redux/darkmode/darkmodeSlice";

function Header({ user }) {
    const darkmode = darkmodeSelector();
    const dispatch = useDispatch();

    const navigate = useNavigate();

    const toggleMode = () => {
        dispatch(setDarkMode(!darkmode));
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
                            src={darkmode ? dark_mode : light_mode}
                        />
                    </div>
                    <div
                        className="profile-container"
                        onClick={() => {
                            navigate("/settings");
                        }}
                    >
                        <img
                            src={`http://192.168.1.9:4000/images/profiles${user.profile_pic}`}
                        />
                        <span className="username">{user.first_name}</span>
                    </div>
                </div>
            </header>
        </>
    );
}

export default Header;
