import "./settings.styles.scss";

import { saveLocationToSession } from "../../config/navlinks";

function SettingsPage() {
    saveLocationToSession();
    return <></>;
}

export default SettingsPage;
