import "./deadline.styles.scss";
import DeadlineTask from "./deadline.task.component";

function Deadline() {
    return (
        <div className="deadline-container">
            <h3>Upcoming Deadlines</h3>
            <div className="deadlines">
                <DeadlineTask duedate={"10/12/2026"} task={"task 1"} />
                <DeadlineTask duedate={"10/3/2026"} task={"task 2"} />
                <DeadlineTask duedate={"12/3/2026"} task={"task 3"} />
                <DeadlineTask duedate={"10/12/2026"} task={"task 1"} />
                <DeadlineTask duedate={"10/3/2026"} task={"task 2"} />
                <DeadlineTask duedate={"12/3/2026"} task={"task 3"} />
            </div>
            <div className="button-container">
                <button>View All Tasks</button>
            </div>
        </div>
    );
}

export default Deadline;
