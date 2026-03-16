import SpecialBox from "../specialbox/specialbox.component";
import Task from "./task.component";
import TaskHead from "./taskhead.component";

import { tasks_api } from "../../config/api/tasks_api";
import { setTasks } from "../../redux/tasks/taskSlice";
import { useDispatch } from "react-redux";
import { taskSelector } from "../../redux/tasks/taskSelector";

function MyTasks({ tasks }) {
    const dispatch = useDispatch();
    const allTasks = taskSelector();
    const deleteTask = async (taskID) => {
        try {
            await tasks_api.delete(`/deleteTask/${taskID}`);
            const newTasks = allTasks.filter((task) => task.id !== taskID);
            dispatch(setTasks(newTasks));
        } catch (error) {
            console.log(error);
        }
    };

    const finishTask = async (taskID) => {
        try {
            await tasks_api.patch(`/finishTask/${taskID}`);
            const newTasks = allTasks.map((task) =>
                task.id === taskID ? { ...task, finished: true } : task,
            );
            dispatch(setTasks(newTasks));
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <SpecialBox width={"calc(100% - 20px)"}>
            <TaskHead />

            {tasks.map((task) => {
                return (
                    <Task
                        key={task.id}
                        task={task.task}
                        duedate={task.duedate}
                        priority={task.priority}
                        id={task.id}
                        deleteTask={deleteTask}
                        done={finishTask}
                    />
                );
            })}
        </SpecialBox>
    );
}

export default MyTasks;
