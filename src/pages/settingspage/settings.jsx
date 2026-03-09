import "./settings.styles.scss";

import { logout } from "../../config/api/auth_api";
import { clearUser } from "../../redux/user/userSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { useState } from "react";

import SettingsNav from "../../componentes/settings-nav/settings-nav.component";
import Welcome from "../../componentes/welcome/welcome.component";
import Profile from "./minipages/profileSetting/profile";
import Security from "./minipages/securitySetting/security";
import Appearance from "./minipages/appearanceSetting/appearance";

function SettingsPage() {
    const [isActive, setActive] = useState("Profile");

    const dispatch = useDispatch();
    const navigate = useNavigate();

    let content;

    switch (isActive) {
        case "Profile":
            content = <Profile />;
            break;
        case "Security":
            content = <Security />;
            break;
        case "Appearance":
            content = <Appearance />;
            break;
        default:
            content = <Profile />;
            break;
    }
    return (
        <>
            <div className="settings-page">
                <Welcome title={"Settings"} />
                <SettingsNav isActive={isActive} setActive={setActive} />
                <main className="main-settings">{content}</main>
            </div>
        </>
    );
}

export default SettingsPage;
