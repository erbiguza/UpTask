import SpecialBox from "../specialbox/specialbox.component";
import Task from "./task.component";
import TaskHead from "./taskhead.component";

function MyTasks({ tasks }) {
    return (
        <SpecialBox
            width={"calc(100% - 20px)"}
            onclick={() => console.log("Task added!")}
        >
            <TaskHead />

            {tasks.map((task) => {
                return (
                    <Task
                        key={task.id}
                        task={task.task}
                        duedate={task.duedate.toLocaleDateString()}
                        priority={task.priority}
                    />
                );
            })}
        </SpecialBox>
    );
}

export default MyTasks;
