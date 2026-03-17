import "./cropImage.styles.scss";
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";
import { useRef } from "react";
import { uploadImage } from "../../../config/api/profilePic_api";
import { getUser } from "../../../config/api/auth_api";
import { useDispatch } from "react-redux";
import { setLoading } from "../../../redux/loading/loadingSlice";
import { setUser } from "../../../redux/user/userSlice";

function CropImage({ image, close }) {
    const cropperRef = useRef(null);
    const dispatch = useDispatch();

    const handleCrop = async () => {
        const cropper = cropperRef.current?.cropper;

        if (cropper) {
            cropper
                .getCroppedCanvas({ width: 300, height: 300 })
                .toBlob(async (blob) => {
                    if (blob) {
                        const file = new File([blob], "profile.jpg", {
                            type: blob.type,
                        });
                        dispatch(setLoading(true));
                        await uploadImage(file);
                        dispatch(setUser(await getUser()));
                        dispatch(setLoading(false));
                    }
                }, "image/png");
        }

        close();
    };

    return (
        <div className="cropper-overlay">
            <div className="cropper-div">
                <div className="cropper-container">
                    <Cropper
                        src={image ? URL.createObjectURL(image) : ""}
                        style={{ height: "100%", width: "100%" }}
                        aspectRatio={1}
                        guides={true}
                        ref={cropperRef}
                        viewMode={1}
                        dragMode="move"
                        scalable={true}
                        cropBoxMovable={true}
                        cropBoxResizable={true}
                    />
                </div>
                <button className="cropper-btn send" onClick={handleCrop}>
                    Confirm
                </button>
                <button className="cropper-btn close" onClick={close}>
                    Close
                </button>
            </div>
        </div>
    );
}

export default CropImage;
