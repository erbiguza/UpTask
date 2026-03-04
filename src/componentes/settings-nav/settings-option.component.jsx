import "./settings-option.styles.scss";

function SettingsOption({ content, isActive, setActive }) {
    let clsName = "setting-option ";
    if (isActive === content) {
        clsName += "active";
    }
    return (
        <>
            <div className={clsName} onClick={() => setActive(content)}>
                <p>{content}</p>
            </div>
        </>
    );
}

export default SettingsOption;
