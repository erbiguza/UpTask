import "./settings.styles.scss";

import { logout } from "../../config/api/auth_api";
import { clearUser } from "../../redux/user/userSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";

function SettingsPage() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    return (
        <>
            <button
                onClick={async () => {
                    await logout();
                    dispatch(clearUser());
                    navigate("/");
                }}
            >
                Log out
            </button>
        </>
    );
}

export default SettingsPage;
