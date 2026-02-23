import Overview from "../../componentes/overview/overview.component";
import Welcome from "../../componentes/welcome/welcome.component";
import "./homepage.styles.scss";

function Homepage() {
    return (
        <>
            <Welcome />
            <Overview />
        </>
    );
}

export default Homepage;
