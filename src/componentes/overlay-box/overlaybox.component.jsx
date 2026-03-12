import "./overlaybox.styles.scss";

import SpecialButton from "../special-button/special-button.component.jsx";

function OverlayBox({ children, title, onSend, onClose, buttonName }) {
    return (
        <div className="overlay-div">
            <h2 className="box-title">{title}</h2>
            {children}
            <div className="buttons">
                <SpecialButton
                    type={"confirm"}
                    name={buttonName}
                    onclick={onSend}
                />
                <SpecialButton
                    type={"logout"}
                    name={"Close"}
                    onclick={onClose}
                />
            </div>
        </div>
    );
}

export default OverlayBox;
