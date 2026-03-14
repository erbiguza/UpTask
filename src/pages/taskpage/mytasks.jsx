import "./mytasks.styles.scss";

import Welcome from "../../componentes/welcome/welcome.component";
import Filter from "../../componentes/filter/filter.component";
import MyTasks from "../../componentes/tasks/mytasks.component";

import { getTasks } from "../../config/api/tasks_api";
import { useEffect, useState } from "react";

function MyTasksPage() {
    const [tasks, setTasks] = useState([]);
    const [filteredTasks, setFilteredTasks] = useState([]);

    useEffect(() => {
        const fetchTasks = async () => {
            try {
                console.log("here");
                const data = await getTasks();
                setTasks(data);

                setFilteredTasks(data);
            } catch (error) {
                console.log("error: ", error);
            }
        };

        fetchTasks();
    }, []);
    return (
        <>
            <Welcome title={"My Tasks"} button={"+ Add task"} />
            <Filter setFilteredTasks={setFilteredTasks} tasks={tasks} />
            <MyTasks tasks={filteredTasks} />
        </>
    );
}

export default MyTasksPage;
