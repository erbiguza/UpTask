import SpecialBox from "../specialbox/specialbox.component";
import DeadlineTask from "./deadline.task.component";

function Deadline() {
    const tasks = [
        { task: "Task 1", duedate: "10/12/2026" },
        { task: "Task 2", duedate: "11/11/2026" },
        { task: "Task 3", duedate: "21/03/2026" },
        { task: "Task 4", duedate: "8/12/2026" },
        { task: "Task 5", duedate: "1/03/2026" },
        { task: "Task 6", duedate: "30/08/2026" },
    ];
    return (
        <SpecialBox
            boxname={"Upcoming Deadlines"}
            width={"60%"}
            button={"View All Tasks"}
            onclick={() => console.log("punon!")}
        >
            {tasks.map((task) => (
                <DeadlineTask
                    key={task.task}
                    duedate={task.duedate}
                    task={task.task}
                />
            ))}
        </SpecialBox>
    );
}

export default Deadline;
