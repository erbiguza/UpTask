import "./navbar.styles.scss";
import logoutimg from "../../assets/images/icons/logout.png";

import { logout } from "../../config/api/auth_api.js";
import { useNavigate, useLocation } from "react-router";

import SidebarOption from "./navbar.option.component.jsx";
import { options } from "../../config/navlinks.js";

import { clearUser } from "../../redux/user/userSlice.js";
import { useDispatch, useSelector } from "react-redux";
import { setLoading } from "../../redux/loading/loadingSlice.js";

function Sidebar() {
    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const loading = useSelector((state) => state.loading.loading);

    const getActiveName = () => {
        switch (location.pathname) {
            case "/":
                return "Dashboard";
            case "/tasks":
                return "My Tasks";
            case "/calendar":
                return "Calendar";
            case "/settings":
                return "Settings";
            default:
                return "";
        }
    };

    const active = getActiveName();
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
                    }}
                />
            ))}
            <div
                className="logout-btn"
                onClick={async () => {
                    dispatch(setLoading(true));
                    await logout();
                    dispatch(clearUser());
                    dispatch(setLoading(false));
                    navigate("/");
                }}
            >
                <div className="imgContainer">
                    <img src={logoutimg} />
                </div>
                <span>Log Out</span>
            </div>
        </div>
    );
}

export default Sidebar;
