import "./appearance.styles.scss";

import { getDefaultPics } from "../../../../config/api/profilePic_api";

import DropdownSettingCard from "../../../../components/layout/setting-card/dropdown-setting-card.component";
import NormalSettingCard from "../../../../components/layout/setting-card/normal-setting-card.component";
import ProfilesDisplay from "../../../../components/layout/profilesDisplay/profilesDisplay.component";
import SpecialButton from "../../../../components/ui/special-button/special-button.component";
import CropImage from "../../../../components/layout/cropImage/cropImage.component";

import { pic_apis } from "../../../../config/api/profilePic_api";

import { setLoading } from "../../../../redux/loading/loadingSlice";
import { setDarkMode } from "../../../../redux/darkmode/darkmodeSlice";
import { darkmodeSelector } from "../../../../redux/darkmode/darkmodeSelector";
import { updateProfilePic } from "../../../../redux/user/userSlice";
import { userSelector } from "../../../../redux/user/userSelector";
import { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";

function Appearance() {
    const darkmode = darkmodeSelector();
    const dispatch = useDispatch();
    const user = userSelector();

    const imageRef = useRef(null);

    const [image, setImage] = useState(null);
    const [croppedImg, setCroppedImg] = useState(null);
    const [pics, setPics] = useState([]);
    const [selectedPic, setSelectedPic] = useState("");

    const handleChange = async () => {
        if (selectedPic) {
            try {
                dispatch(setLoading(true));
                pic_apis.post("/setPic", { profilePic: selectedPic });
                dispatch(updateProfilePic(selectedPic));
            } catch (error) {
                console.log(error);
            } finally {
                dispatch(setLoading(false));
            }
        }
    };

    const handleClose = (e) => {
        setImage("");
        imageRef.current.value = "";
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImage(file);
        }
    };

    useEffect(() => {
        const fetchPics = async () => {
            const data = await getDefaultPics();
            setPics(data);
        };
        fetchPics();
    }, []);

    return (
        <div>
            <NormalSettingCard
                buttonName={darkmode ? "Disable" : "Enable"}
                title={"Dark Mode"}
                description={"Toggle Dark Mode"}
                onclick={() => {
                    dispatch(setDarkMode(!darkmode));
                }}
            />
            <DropdownSettingCard
                title={"Profile Picture"}
                description={"Change Profile Picture"}
            >
                <ProfilesDisplay
                    imageNames={pics}
                    setSelectedPic={setSelectedPic}
                />
                <input
                    type="file"
                    ref={imageRef}
                    onChange={handleImageChange}
                />
                <SpecialButton
                    name={"Done"}
                    type={"confirm"}
                    onclick={handleChange}
                />
                {image && <CropImage image={image} close={handleClose} />}
            </DropdownSettingCard>
        </div>
    );
}

export default Appearance;
