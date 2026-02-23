import "./sidebar.option.styles.scss";

function SidebarOption({ content, isActive, onClick, icon }) {
    let clsName = "side-option ";

    if (isActive) {
        clsName += "active";
    }
    return (
        <div className={clsName} onClick={onClick}>
            <div className="img-container">
                <img src={icon} />
            </div>
            <p>{content}</p>
        </div>
    );
}

export default SidebarOption;
