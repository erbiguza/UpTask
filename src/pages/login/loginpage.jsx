import "./loginpage.scss";

import { auth_api, getUser } from "../../config/api/auth_api";

import { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import logo from "../../assets/images/icons/logo.png";
import emailphoto from "../../assets/images/inputs/email.png";

import NormalInput from "../../componentes/inputs/normal-input.component";
import PasswordInput from "../../componentes/inputs/password-input.component";
import SpecialButton from "../../componentes/special-button/special-button.component";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setUser } from "../../redux/user/userSlice";

function LogInPage() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const user = useSelector((state) => state.user.user);

    useEffect(() => {
        if (Object.keys(user).length > 0) {
            navigate(
                sessionStorage.getItem("path")
                    ? sessionStorage.getItem("path")
                    : "/",
            );
        }
    }, [user]);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [errorMsg, setErrorMsg] = useState("");

    const handleLogin = async (event) => {
        event.preventDefault();
        try {
            await auth_api.post("./login", { email, password });
            const newUser = await getUser();
            dispatch(setUser(newUser));
            navigate("/");
        } catch (error) {
            setErrorMsg(error.response.data.message);
        }
    };

    return (
        <>
            <div className="auth-container">
                <div className="form-container">
                    <div className="head-container">
                        <img src={logo} />
                    </div>
                    <form className="form">
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

                        <SpecialButton
                            name={"Log In"}
                            type={"login"}
                            onclick={handleLogin}
                        />
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
