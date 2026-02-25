import "./task.styles.scss";

function Task({ task, duedate, priority }) {
    let clsName = "prio-box ";

    switch (priority.toLowerCase()) {
        case "low":
            clsName += "low";
            break;
        case "medium":
            clsName += "medium";
            break;
        case "high":
            clsName += "high";
            break;

        default:
            clsName;
    }

    return (
        <div className="task-container">
            <div className="row">
                <div className="description">
                    <p>{task}</p>
                </div>
                <p>{duedate}</p>
                <div className={clsName}>{priority}</div>
            </div>
            <div className="row buttons">
                <button className="done">Done</button>
                <button className="remove">Remove</button>
                <button className="edit">Edit</button>
            </div>
        </div>
    );
}

export default Task;
