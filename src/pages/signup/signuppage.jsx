import "./signuppage.scss";

import { NavLink, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import { auth_api, getUser } from "../../config/api/auth_api";

import logo from "../../assets/images/icons/logo.png";
import userphoto from "../../assets/images/inputs/user.png";
import emailphoto from "../../assets/images/inputs/email.png";

import NormalInput from "../../components/ui/inputs/normal-input.component";
import PasswordInput from "../../components/ui/inputs/password-input.component";
import SpecialButton from "../../components/ui/special-button/special-button.component";

import { userSelector } from "../../redux/user/userSelector.js";
import { useDispatch } from "react-redux";
import { setUser } from "../../redux/user/userSlice";
import { setLoading } from "../../redux/loading/loadingSlice";

function SignUpPage() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const user = userSelector();

    useEffect(() => {
        if (Object.keys(user).length > 0) navigate("/");
    }, [user]);

    const [fullname, setFullname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [errorMsg, setErrorMsg] = useState(" ");

    const handleSignup = async (event) => {
        event.preventDefault();
        setErrorMsg("");
        if (
            fullname === "" ||
            email === "" ||
            password === "" ||
            confirmPassword === ""
        ) {
            setErrorMsg("All fields required");
        } else if (password !== confirmPassword) {
            setErrorMsg("Passwords don't match");
        } else if (password.length < 8) {
            setErrorMsg("Minimum password length is 8");
        } else {
            const [first_name, last_name] = fullname.split(" ");

            if (!first_name || !last_name) {
                setErrorMsg("Please enter first and last name");
            } else {
                try {
                    dispatch(setLoading(true));
                    await auth_api.post("/signup", {
                        first_name,
                        last_name,
                        email,
                        password,
                    });
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
                    <form className="form" onSubmit={handleSignup}>
                        <NormalInput
                            lightmode={true}
                            icon={userphoto}
                            placeholder={"Full Name"}
                            type={"fullname"}
                            value={fullname}
                            onchange={(e) => {
                                setFullname(e.target.value);
                            }}
                        />
                        <NormalInput
                            lightmode={true}
                            icon={emailphoto}
                            placeholder={"Email"}
                            type={"email"}
                            value={email}
                            onchange={(e) => {
                                setEmail(e.target.value);
                            }}
                        />
                        <PasswordInput
                            lightmode={true}
                            placeholder={"Password"}
                            value={password}
                            onchange={(e) => {
                                setPassword(e.target.value);
                            }}
                        />
                        <PasswordInput
                            lightmode={true}
                            placeholder={"Confirm Password"}
                            value={confirmPassword}
                            onchange={(e) => {
                                setConfirmPassword(e.target.value);
                            }}
                        />
                        <div className="error-container">
                            <p className="error-message">{errorMsg}</p>
                        </div>
                        <SpecialButton name={"Sign Up"} type={"confirm"} />
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
