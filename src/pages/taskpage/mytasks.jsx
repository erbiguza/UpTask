import "./mytasks.styles.scss";

import Welcome from "../../componentes/welcome/welcome.component";
import Filter from "../../componentes/filter/filter.component";

function MyTasksPage() {
    return (
        <>
            <Welcome title={"My Tasks"} />
            <Filter />
        </>
    );
}

export default MyTasksPage;
