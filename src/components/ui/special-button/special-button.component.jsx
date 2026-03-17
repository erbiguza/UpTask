import "./special-button.styles.scss";

function SpecialButton({ type, name, onclick }) {
    return (
        <button onClick={onclick} className={`special-button ${type}`}>
            {name}
        </button>
    );
}

export default SpecialButton;
