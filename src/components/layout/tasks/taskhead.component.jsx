import "./taskhead.styles.scss";

function TaskHead() {
    return (
        <div className="head-container">
            <div className="task-desc">
                <h3>Description</h3>
            </div>
            <div className="duedate">
                <h3>Due Date</h3>
            </div>
            <div className="priority">
                <h3>Priority</h3>
            </div>
        </div>
    );
}

export default TaskHead;
