import "./imageDisplay.styles.scss";

const url = import.meta.env.VITE_PICTURES_FOLDER;
function ImageDisplay({ image, selected, onclick }) {
    let clsName = "";
    if (selected) clsName += "selected";
    return (
        <div className={`photo-container ${clsName}`} onClick={onclick}>
            <img className="profile-display" src={`${url}${image}`} />
        </div>
    );
}

export default ImageDisplay;
