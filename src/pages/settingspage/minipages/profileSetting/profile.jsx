import "./profile.styles.scss";

import { logout } from "../../../../config/api/auth_api";

import { userSelector } from "../../../../redux/user/userSelector";
import { clearUser } from "../../../../redux/user/userSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";

import InfoCard from "../../../../componentes/info-card/info-card.component";
import SpecialButton from "../../../../componentes/special-button/special-button.component";

function Profile() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const user = userSelector();

    const mappedInfo = [
        { infoType: "First Name", info: user.first_name },
        { infoType: "Last Name", info: user.last_name },
        { infoType: "Email", info: user.email },
    ];

    return (
        <>
            {mappedInfo.map((el) => (
                <InfoCard
                    key={el.infoType}
                    infoType={el.infoType}
                    info={el.info}
                />
            ))}
            <div className="mobile-only">
                <SpecialButton
                    type={"logout"}
                    name={"Log Out"}
                    onclick={async () => {
                        await logout();
                        dispatch(clearUser());
                        navigate("/");
                    }}
                ></SpecialButton>
            </div>
        </>
    );
}

export default Profile;
