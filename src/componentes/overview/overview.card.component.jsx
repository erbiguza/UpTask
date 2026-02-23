import "./overview.card.styles.scss";
import completed from "../../assets/images/icons/completed.png";
import danger from "../../assets/images/icons/danger.png";
import pending from "../../assets/images/icons/pending.png";

function OverviewCard({ type, quantity }) {
    let logo, message;
    if (type === "completed") {
        logo = completed;
        message = "Completed Tasks";
    } else if (type === "pending") {
        logo = pending;
        message = "Pending Tasks";
    } else {
        logo = danger;
        message = "Overdue Tasks";
    }

    let classname = "card " + type;

    return (
        <div className={classname}>
            <div className="img-container">
                <img src={logo} />
            </div>
            <div className="info-container">
                <h2>{message}</h2>
                <h4>{quantity} tasks</h4>
            </div>
        </div>
    );
}

export default OverviewCard;
