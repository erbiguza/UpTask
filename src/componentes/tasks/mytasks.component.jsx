import SpecialBox from "../specialbox/specialbox.component";
import Task from "./task.component";
import TaskHead from "./taskhead.component";

function MyTasks() {
    return (
        <SpecialBox
            width={"calc(100% - 20px)"}
            onclick={() => console.log("Task added!")}
        >
            <TaskHead />
            <Task
                task={"Finish setting up the backend for qyteti qe degjon"}
                duedate={"11/11/2025"}
                priority={"Low"}
            />
            <Task
                task={"Finish setting up the backend for qyteti qe degjon"}
                duedate={"11/11/2025"}
                priority={"Medium"}
            />
            <Task
                task={"Finish setting up the backend for qyteti qe degjon"}
                duedate={"11/11/2025"}
                priority={"Medium"}
            />
            <Task
                task={"Finish setting up the backend for qyteti qe degjon"}
                duedate={"11/11/2025"}
                priority={"High"}
            />
            <Task
                task={"Finish setting up the backend for qyteti qe degjon"}
                duedate={"11/11/2025"}
                priority={"Low"}
            />
        </SpecialBox>
    );
}

export default MyTasks;
