import "./normal-setting-card.styles.scss";

function NormalSettingCard({ title, description, buttonName, onclick }) {
    return (
        <div className="setting-card">
            <div className="first-row">
                <div className="text">
                    <h2>{title}</h2>
                    <h4>{description}</h4>
                </div>
                <div className="button-container">
                    <button className="settingButton" onClick={onclick}>
                        {buttonName}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default NormalSettingCard;
