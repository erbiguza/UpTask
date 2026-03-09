import "./loginpage.scss";

import { auth_api, getUser } from "../../config/api/auth_api";

import { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import logo from "../../assets/images/icons/logo.png";
import emailphoto from "../../assets/images/inputs/email.png";

import NormalInput from "../../componentes/inputs/normal-input.component";
import PasswordInput from "../../componentes/inputs/password-input.component";
import SpecialButton from "../../componentes/special-button/special-button.component";

import { userSelector } from "../../redux/user/userSelector.js";
import { useDispatch } from "react-redux";
import { setUser } from "../../redux/user/userSlice";
import { setLoading } from "../../redux/loading/loadingSlice";

function LogInPage() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const user = userSelector();

    useEffect(() => {
        if (Object.keys(user).length > 0) {
            navigate("/");
        }
    }, [user]);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [errorMsg, setErrorMsg] = useState("");

    const handleLogin = async (event) => {
        event.preventDefault();
        try {
            dispatch(setLoading(true));
            await auth_api.post("/login", { email, password });
            const newUser = await getUser();
            dispatch(setUser(newUser));
        } catch (error) {
            if (!error.response) {
                setErrorMsg("Please try again later");
            } else {
                setErrorMsg(error.response.data.message);
            }
        } finally {
            dispatch(setLoading(false));
        }
    };

    return (
        <>
            <div className="auth-container">
                <div className="form-container">
                    <div className="head-container">
                        <img src={logo} />
                    </div>
                    <form className="form" onSubmit={handleLogin}>
                        <NormalInput
                            icon={emailphoto}
                            placeholder={"Email"}
                            type={"email"}
                            value={email}
                            onchange={(e) => {
                                setEmail(e.target.value);
                            }}
                        />
                        <PasswordInput
                            placeholder={"Password"}
                            value={password}
                            onchange={(e) => {
                                setPassword(e.target.value);
                            }}
                        />
                        <div className="error-container">
                            <p className="error-message">{errorMsg}</p>
                        </div>

                        <SpecialButton name={"Log In"} type={"confirm"} />
                    </form>
                    <p>
                        Don't have an account?{" "}
                        <NavLink className="login-link" to="/signup">
                            Sign Up
                        </NavLink>
                    </p>
                </div>
            </div>
        </>
    );
}

export default LogInPage;
