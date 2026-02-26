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

function App() {
    const [user, setUser] = useState({});

    return (
        <Routes>
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/login" element={<LogInPage />} />

            <Route element={<ProtectedRoute user={user} />}>
                <Route path="/" element={<Homepage />} />
                <Route path="/tasks" element={<MyTasksPage />} />
                <Route path="/calendar" element={<CalendarPage />} />
                <Route path="/settings" element={<SettingsPage />} />
            </Route>
        </Routes>
    );
}

export default App;
