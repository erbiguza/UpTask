import "./calendar.styles.scss";

import { saveLocationToSession } from "../../config/navlinks";

function CalendarPage() {
    saveLocationToSession();
    return <></>;
}

export default CalendarPage;
