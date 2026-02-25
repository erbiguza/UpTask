import "./filter.option.styles.scss";

function FilterOption({ option, isActive, onClick }) {
    let clsName = "option ";

    if (isActive) {
        clsName += "active";
    }
    return (
        <div className={clsName} onClick={onClick}>
            <h4>{option}</h4>
        </div>
    );
}

export default FilterOption;
