import Deadline from "../../componentes/deadline/deadline.component";
import Overview from "../../componentes/overview/overview.component";
import QuickNotes from "../../componentes/quicknotes/quicknotes.component";
import Welcome from "../../componentes/welcome/welcome.component";

import "./homepage.styles.scss";

import { useSelector } from "react-redux";

function Homepage() {
    const { first_name } = useSelector((state) => state.user.user);

    return (
        <>
            <Welcome
                title={`Welcome back, ${first_name}!`}
                description={"Here's your productivity overview"}
            />
            <Overview />
            <div className="bottom-container">
                <Deadline />
                <QuickNotes />
            </div>
        </>
    );
}

export default Homepage;
