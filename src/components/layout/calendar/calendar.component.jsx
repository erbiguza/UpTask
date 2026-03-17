import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";

import "./calendar.styles.scss";

import { taskSelector } from "../../../redux/tasks/taskSelector";

function Calendar() {
    const tasks = taskSelector();
    const calendarTasks = tasks.map((task) =>
        !task.finished ? { title: task.task, date: task.duedate } : {},
    );
    return (
        <FullCalendar
            plugins={[dayGridPlugin]}
            initialView="dayGridMonth"
            weekends={true}
            events={calendarTasks}
        />
    );
}

export default Calendar;
