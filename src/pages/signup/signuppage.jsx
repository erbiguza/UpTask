import "./signuppage.scss";

import logo from "../../assets/images/icons/logo.png";
import user from "../../assets/images/inputs/user.png";
import email from "../../assets/images/inputs/email.png";

import NormalInput from "../../componentes/inputs/normal-input.component";
import PasswordInput from "../../componentes/inputs/password-input.component";

function SignUpPage() {
    return (
        <>
            <div className="auth-container">
                <div className="form-container">
                    <div className="head-container">
                        <img src={logo} />
                    </div>
                    <div className="form">
                        <NormalInput
                            icon={user}
                            placeholder={"Full Name"}
                            type={"text"}
                        />
                        <NormalInput
                            icon={email}
                            placeholder={"Email"}
                            type={email}
                        />
                        <PasswordInput placeholder={"Password"} />
                        <PasswordInput placeholder={"Confirm Password"} />
                    </div>
                    <div className="button-section"></div>
                </div>
            </div>
        </>
    );
}

export default SignUpPage;
