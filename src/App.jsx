import { Routes, Route } from "react-router-dom";

import "./App.css";

import Homepage from "./pages/homepage/homepage.jsx";
import MyTasksPage from "./pages/taskpage/mytasks.jsx";
import CalendarPage from "./pages/calendarpage/calendar.jsx";
import SettingsPage from "./pages/settingspage/settings.jsx";
import SignUpPage from "./pages/signup/signuppage.jsx";
import LogInPage from "./pages/login/loginpage.jsx";
import ProtectedRoute from "./routes/protectedroute.jsx";

import { useEffect, useState } from "react";

import { getUser } from "./config/api/auth_api.js";

function App() {
    const [user, setUser] = useState({});

    useEffect(() => {
        const fetchUser = async () => {
            const data = await getUser();

            setUser(data);
        };

        fetchUser();
    }, []);

    return (
        <Routes>
            <Route
                path="/signup"
                element={<SignUpPage user={user} setUser={setUser} />}
            />
            <Route
                path="/login"
                element={<LogInPage user={user} setUser={setUser} />}
            />

            <Route element={<ProtectedRoute user={user} setUser={setUser} />}>
                <Route path="/" element={<Homepage name={user.first_name} />} />
                <Route path="/tasks" element={<MyTasksPage />} />
                <Route path="/calendar" element={<CalendarPage />} />
                <Route path="/settings" element={<SettingsPage />} />
            </Route>
        </Routes>
    );
}

export default App;
