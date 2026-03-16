import SpecialBox from "../specialbox/specialbox.component";
import DeadlineTask from "./deadline.task.component";

import { useNavigate } from "react-router-dom";

function Deadline({ tasks }) {
    const navigate = useNavigate();

    return (
        <SpecialBox
            boxname={"Upcoming Deadlines"}
            width={"60%"}
            button={"View All Tasks"}
            onclick={() => navigate("/tasks")}
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
