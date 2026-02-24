import Overview from "../../componentes/overview/overview.component";
import QuickNotes from "../../componentes/quicknotes/quicknotes.component";
import Welcome from "../../componentes/welcome/welcome.component";
import "./homepage.styles.scss";

function Homepage() {
    return (
        <>
            <Welcome />
            <Overview />
            <QuickNotes />
        </>
    );
}

export default Homepage;
