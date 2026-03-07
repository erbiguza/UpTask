import "./security.styles.scss";

import SettingCard from "../../../../componentes/setting-card/setting-card.component";
import PasswordInput from "../../../../componentes/inputs/password-input.component";

import { useState } from "react";
import { auth_api } from "../../../../config/api/auth_api";
import { useDispatch } from "react-redux";
import { setLoading } from "../../../../redux/loading/loadingSlice.js";

function Security() {
    const dispatch = useDispatch();

    const [errorMsg, setErrorMsg] = useState("");
    const [successMsg, setSuccessMsg] = useState("");

    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const updatePass = async (event) => {
        event.preventDefault();
        setErrorMsg("");
        setSuccessMsg("");
        if (!oldPassword || !newPassword || !confirmPassword) {
            setErrorMsg("All fields required");
        } else if (newPassword !== confirmPassword) {
            setErrorMsg("Passwords must match");
        } else {
            try {
                dispatch(setLoading(true));
                const response = await auth_api.post("/changePassword", {
                    oldPassword,
                    newPassword,
                });
                console.log(response.data.message);
                setSuccessMsg(response.data.message);
            } catch (error) {
                if (!error.response) {
                    setErrorMsg("Please try again later");
                } else {
                    console.log(error.response.data.message);
                    setErrorMsg(error.response.data.message);
                }
            } finally {
                dispatch(setLoading(false));
            }
        }
    };
    return (
        <>
            <SettingCard
                title={"Change your password"}
                description={"Update password regularly"}
            >
                <PasswordInput
                    placeholder={"Old Password"}
                    value={oldPassword}
                    onchange={(e) => {
                        setOldPassword(e.target.value);
                    }}
                />
                <PasswordInput
                    placeholder={"New Password"}
                    value={newPassword}
                    onchange={(e) => {
                        setNewPassword(e.target.value);
                    }}
                />
                <PasswordInput
                    placeholder={"Confirm New Password"}
                    value={confirmPassword}
                    onchange={(e) => {
                        setConfirmPassword(e.target.value);
                    }}
                />

                <p className="error-msg">{errorMsg}</p>
                <p className="success-msg">{successMsg}</p>

                <button className="confirm-button" onClick={updatePass}>
                    Update
                </button>
            </SettingCard>
        </>
    );
}

export default Security;
