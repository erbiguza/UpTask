import "./signuppage.scss";

import { NavLink, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import { auth_api, getUser } from "../../config/api/auth_api";

import logo from "../../assets/images/icons/logo.png";
import userphoto from "../../assets/images/inputs/user.png";
import emailphoto from "../../assets/images/inputs/email.png";

import NormalInput from "../../componentes/inputs/normal-input.component";
import PasswordInput from "../../componentes/inputs/password-input.component";
import SpecialButton from "../../componentes/special-button/special-button.component";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setUser } from "../../redux/user/userSlice";

function SignUpPage() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const user = useSelector((state) => state.user.user);

    useEffect(() => {
        if (Object.keys(user).length > 0)
            navigate(sessionStorage.getItem("path"));
    }, [user]);

    const [fullname, setFullname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [errorMsg, setErrorMsg] = useState(" ");

    const handleSignup = async (event) => {
        setErrorMsg("");
        if (
            fullname === "" ||
            email === "" ||
            password === "" ||
            confirmPassword === ""
        ) {
            setErrorMsg("All fields required");
        } else if (password !== confirmPassword) {
            event.preventDefault();
            setErrorMsg("Passwords don't match");
        } else if (password.length < 8) {
            event.preventDefault();
            setErrorMsg("Minimum password length is 8");
        } else {
            event.preventDefault();
            const [first_name, last_name] = fullname.split(" ");

            if (!first_name || !last_name) {
                setErrorMsg("Please enter first and last name");
            } else {
                try {
                    await auth_api.post("/signup", {
                        first_name,
                        last_name,
                        email,
                        password,
                    });
                    const newUser = await getUser();
                    dispatch(setUser(newUser));
                    navigate("/");
                } catch (error) {
                    console.log(error);
                    setErrorMsg(error.response.data.message);
                }
            }
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
                            icon={userphoto}
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
