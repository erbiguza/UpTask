import "./signuppage.scss";

import { NavLink } from "react-router-dom";
import { useState } from "react";

import logo from "../../assets/images/icons/logo.png";
import user from "../../assets/images/inputs/user.png";
import emailphoto from "../../assets/images/inputs/email.png";

import NormalInput from "../../componentes/inputs/normal-input.component";
import PasswordInput from "../../componentes/inputs/password-input.component";
import SpecialButton from "../../componentes/special-button/special-button.component";

function SignUpPage() {
    const [fullname, setFullname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [errorMsg, setErrorMsg] = useState(" ");

    const handleSignup = (event) => {
        setErrorMsg("");
        if (
            fullname === "" ||
            email === "" ||
            password === "" ||
            confirmPassword === ""
        ) {
            setErrorMsg("All fields required");
        }
        if (password !== confirmPassword) {
            event.preventDefault();
            setErrorMsg("Passwords don't match");
        }
        if (password.length < 8) {
            event.preventDefault();
            setErrorMsg("Minimum password length is 8");
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
                            icon={user}
                            placeholder={"Full Name"}
                            type={"text"}
                            value={fullname}
                            onchange={(e) => {
                                setFullname(e.target.value);
                            }}
                        />
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
                        <PasswordInput
                            placeholder={"Confirm Password"}
                            value={confirmPassword}
                            onchange={(e) => {
                                setConfirmPassword(e.target.value);
                            }}
                        />
                        <div className="error-container">
                            <p className="error-message">{errorMsg}</p>
                        </div>
                        <SpecialButton
                            name={"Sign Up"}
                            type={"login"}
                            onclick={handleSignup}
                        />
                    </form>
                    <p>
                        Already have an account?{" "}
                        <NavLink className="login-link" to="/login">
                            Log in
                        </NavLink>
                    </p>
                </div>
            </div>
        </>
    );
}

export default SignUpPage;
