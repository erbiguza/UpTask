import "./deadline.task.styles.scss";

import calendar from "../../assets/images/icons/calendar.png";

function DeadlineTask({ task, duedate }) {
    return (
        <div className="task">
            <h4>{task}</h4>
            <div className="right-side">
                <div className="img-container">
                    <img src={calendar} />
                </div>
                <p>{duedate}</p>
            </div>
        </div>
    );
}

export default DeadlineTask;
