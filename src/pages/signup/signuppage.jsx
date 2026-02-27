import "./signuppage.scss";

import { NavLink } from "react-router-dom";

import logo from "../../assets/images/icons/logo.png";
import user from "../../assets/images/inputs/user.png";
import email from "../../assets/images/inputs/email.png";

import NormalInput from "../../componentes/inputs/normal-input.component";
import PasswordInput from "../../componentes/inputs/password-input.component";
import SpecialButton from "../../componentes/special-button/special-button.component";

function SignUpPage() {
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
                        />
                        <NormalInput
                            icon={email}
                            placeholder={"Email"}
                            type={"email"}
                        />
                        <PasswordInput placeholder={"Password"} />
                        <PasswordInput placeholder={"Confirm Password"} />
                        <SpecialButton name={"Sign Up"} type={"login"} />
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
