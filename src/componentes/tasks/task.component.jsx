import { useState } from "react";
import "./task.styles.scss";
import OverlayBox from "../overlay-box/overlaybox.component";
import NormalInput from "../inputs/normal-input.component";
import DateInput from "../inputs/date-input.component";
import Selector from "../inputs/selector.component";

import { tasks_api } from "../../config/api/tasks_api";

import { useDispatch } from "react-redux";
import { setLoading } from "../../redux/loading/loadingSlice";
import { taskSelector } from "../../redux/tasks/taskSelector";
import { setTasks } from "../../redux/tasks/taskSlice";

function Task({ task, duedate, priority, id, deleteTask, done }) {
    const dispatch = useDispatch();
    const tasks = taskSelector();

    const [editingTask, setEditingTask] = useState(false);

    const [editedTask, setEditedTask] = useState(task);
    const [date, setDate] = useState("");
    const [editedPriority, setEditedPriority] = useState(priority);

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

    const editTask = async () => {
        try {
            dispatch(setLoading(true));
            await tasks_api.patch(`/updateTask/${id}`, {
                new_task: editedTask,
                new_duedate: date ? date + "T00:00:00" : null,
                new_priority: editedPriority,
            });
            const newTasks = tasks.map((task) =>
                task.id == id
                    ? {
                          ...task,
                          task: editedTask,
                          duedate: date ? date : task.duedate,
                          priority: editedPriority,
                      }
                    : task,
            );
            dispatch(setTasks(newTasks));
            setEditingTask(false);
        } catch (error) {
            console.log(error);
        } finally {
            dispatch(setLoading(false));
        }
    };

    return (
        <>
            {editingTask && (
                <OverlayBox
                    buttonName={"Edit Task"}
                    onClose={() => setEditingTask(false)}
                    title={"EDIT TASK"}
                    onSend={editTask}
                >
                    <NormalInput
                        placeholder={"Task"}
                        value={editedTask}
                        onchange={(e) => setEditedTask(e.target.value)}
                    />
                    <DateInput value={date} setValue={setDate} />
                    <Selector
                        options={["Low", "Medium", "High"]}
                        selectedOption={editedPriority}
                        setSelectedOption={setEditedPriority}
                    />
                </OverlayBox>
            )}
            <div className="task-container">
                <div className="row">
                    <div className="description">
                        <p>{task}</p>
                    </div>
                    <p>{duedate}</p>
                    <div className={clsName}>{priority}</div>
                </div>
                <div className="row buttons">
                    <button className="done" onClick={() => done(id)}>
                        Done
                    </button>
                    <button className="remove" onClick={() => deleteTask(id)}>
                        Remove
                    </button>
                    <button
                        className="edit"
                        onClick={() => setEditingTask(!editingTask)}
                    >
                        Edit
                    </button>
                </div>
            </div>
        </>
    );
}

export default Task;
