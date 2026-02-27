import "./loginpage.scss";

import { NavLink } from "react-router-dom";

import logo from "../../assets/images/icons/logo.png";
import user from "../../assets/images/inputs/user.png";
import email from "../../assets/images/inputs/email.png";

import NormalInput from "../../componentes/inputs/normal-input.component";
import PasswordInput from "../../componentes/inputs/password-input.component";
import SpecialButton from "../../componentes/special-button/special-button.component";

function LogInPage() {
    return (
        <>
            <div className="auth-container">
                <div className="form-container">
                    <div className="head-container">
                        <img src={logo} />
                    </div>
                    <form className="form">
                        <NormalInput
                            icon={email}
                            placeholder={"Email"}
                            type={"email"}
                        />
                        <PasswordInput placeholder={"Password"} />

                        <SpecialButton name={"Log In"} type={"login"} />
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
