import "./mytasks.styles.scss";

import Welcome from "../../componentes/welcome/welcome.component";
import Filter from "../../componentes/filter/filter.component";
import MyTasks from "../../componentes/tasks/mytasks.component";

import { saveLocationToSession } from "../../config/navlinks";

function MyTasksPage() {
    saveLocationToSession();
    return (
        <>
            <Welcome title={"My Tasks"} button={"+ Add task"} />
            <Filter />
            <MyTasks />
        </>
    );
}

export default MyTasksPage;
