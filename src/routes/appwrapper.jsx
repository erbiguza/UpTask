import { darkmodeSelector } from "../redux/darkmode/darkmodeSelector";

function AppWrapper({ children }) {
    const darkMode = darkmodeSelector();

    return <div className={darkMode ? "dark" : ""}>{children}</div>;
}

export default AppWrapper;
