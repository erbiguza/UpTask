import home from "../assets/images/icons/home.png";
import calendar from "../assets/images/icons/calendar.png";
import settings from "../assets/images/icons/settings.png";
import tasks from "../assets/images/icons/tasks.png";

import { useLocation } from "react-router";

export const options = [
    { name: "Dashboard", icon: home, path: "/" },
    { name: "My Tasks", icon: tasks, path: "/tasks" },
    { name: "Calendar", icon: calendar, path: "/calendar" },
    { name: "Settings", icon: settings, path: "/settings" },
];

export const saveLocationToSession = () => {
    const location = useLocation();

    sessionStorage.setItem("path", location.pathname);
};
