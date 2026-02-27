import "./loginpage.scss";

import { useState } from "react";
import { NavLink } from "react-router-dom";

import logo from "../../assets/images/icons/logo.png";
import emailphoto from "../../assets/images/inputs/email.png";

import NormalInput from "../../componentes/inputs/normal-input.component";
import PasswordInput from "../../componentes/inputs/password-input.component";
import SpecialButton from "../../componentes/special-button/special-button.component";

function LogInPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [errorMsg, setErrorMsg] = useState("");

    const handleLogin = (event) => {};

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
