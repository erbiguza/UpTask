import "./mytasks.styles.scss";

import Welcome from "../../componentes/welcome/welcome.component";
import Filter from "../../componentes/filter/filter.component";
import MyTasks from "../../componentes/tasks/mytasks.component";
import OverlayBox from "../../componentes/overlay-box/overlaybox.component";
import NormalInput from "../../componentes/inputs/normal-input.component";
import DateInput from "../../componentes/inputs/date-input.component";
import Selector from "../../componentes/inputs/selector.component";

import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setLoading } from "../../redux/loading/loadingSlice";
import { tasks_api } from "../../config/api/tasks_api";

import { taskSelector } from "../../redux/tasks/taskSelector";
import { setTasks } from "../../redux/tasks/taskSlice";

function MyTasksPage() {
    const dispatch = useDispatch();

    const tasks = taskSelector();
    const [filteredTasks, setFilteredTasks] = useState([]);
    const [addingTask, setAddingTask] = useState(false);

    const [task, setTask] = useState("");
    const [date, setDate] = useState("");
    const [priority, setPriority] = useState("Low");

    const createTask = async () => {
        if (!task == "" && !date == "") {
            try {
                dispatch(setLoading(true));
                const response = await tasks_api.post("/createTask", {
                    task: task,
                    duedate: date + "T01:00:00",
                    priority: priority,
                });
                console.log(response);
                const isoString = response.data.task.duedate;

                response.data.task.duedate = new Date(isoString)
                    .toISOString()
                    .split("T")[0];
                dispatch(setTasks([...tasks, response.data.task]));
            } catch (error) {
                console.log(error);
            } finally {
                dispatch(setLoading(false));
                setAddingTask(false);
                setPriority("Low");
                setTask("");
                setDate("");
            }
        }
    };

    useEffect(() => {
        setFilteredTasks(tasks.filter((task) => task.finished === false));
    }, [tasks]);
    return (
        <>
            <Welcome
                title={"My Tasks"}
                button={"+ Add task"}
                onclick={() => setAddingTask(true)}
            />
            {addingTask && (
                <OverlayBox
                    buttonName={"Add Task"}
                    onClose={() => setAddingTask(false)}
                    title={"ADD TASK"}
                    onSend={createTask}
                >
                    <NormalInput
                        placeholder={"Task"}
                        value={task}
                        onchange={(e) => setTask(e.target.value)}
                    />
                    <DateInput value={date} setValue={setDate} />
                    <Selector
                        options={["Low", "Medium", "High"]}
                        selectedOption={priority}
                        setSelectedOption={setPriority}
                    />
                </OverlayBox>
            )}
            <Filter setFilteredTasks={setFilteredTasks} tasks={tasks} />
            <MyTasks tasks={filteredTasks} />
        </>
    );
}

export default MyTasksPage;
