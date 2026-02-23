import "./navbar.styles.scss";
import logout from "../../assets/images/icons/logout.png";

import { useState } from "react";
import { useNavigate } from "react-router";

import SidebarOption from "./navbar.option.component.jsx";
import { options } from "../../config/navlinks.js";

function Sidebar() {
    const [active, setActive] = useState("Dashboard");
    const navigate = useNavigate();

    return (
        <div className="sidebar-container">
            {options.map((option) => (
                <SidebarOption
                    key={option.name}
                    content={option.name}
                    isActive={active === option.name}
                    icon={option.icon}
                    onClick={() => {
                        navigate(option.path);
                        setActive(option.name);
                    }}
                />
            ))}
            <div className="logout-btn">
                <div className="imgContainer">
                    <img src={logout} />
                </div>
                <span>Log Out</span>
            </div>
        </div>
    );
}

export default Sidebar;
