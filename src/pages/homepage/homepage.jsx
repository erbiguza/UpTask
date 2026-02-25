import Deadline from "../../componentes/deadline/deadline.component";
import Overview from "../../componentes/overview/overview.component";
import QuickNotes from "../../componentes/quicknotes/quicknotes.component";
import SpecialBox from "../../componentes/specialbox/specialbox.component";
import Welcome from "../../componentes/welcome/welcome.component";
import DeadlineTask from "../../componentes/deadline/deadline.task.component";

import "./homepage.styles.scss";

function Homepage() {
    return (
        <>
            <Welcome />
            <Overview />
            <div className="bottom-container">
                <Deadline />
                <QuickNotes />
            </div>
        </>
    );
}

export default Homepage;
