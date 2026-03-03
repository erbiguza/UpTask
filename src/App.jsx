import { Routes, Route } from "react-router-dom";

import "./App.css";

import Homepage from "./pages/homepage/homepage.jsx";
import MyTasksPage from "./pages/taskpage/mytasks.jsx";
import CalendarPage from "./pages/calendarpage/calendar.jsx";
import SettingsPage from "./pages/settingspage/settings.jsx";
import SignUpPage from "./pages/signup/signuppage.jsx";
import LogInPage from "./pages/login/loginpage.jsx";
import ProtectedRoute from "./routes/protectedroute.jsx";
import Loading from "./componentes/loading/loading.component.jsx";

import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { setUser } from "./redux/user/userSlice.js";
import { setLoading } from "./redux/loading/loadingSlice.js";

import { getUser } from "./config/api/auth_api.js";

function App() {
    const dispatch = useDispatch();
    const loading = useSelector((state) => state.loading.loading);
    useEffect(() => {
        const fetchUser = async () => {
            try {
                dispatch(setLoading(true));
                const data = await getUser();

                dispatch(setUser(data));
            } catch (error) {
                console.error(error);
            } finally {
                dispatch(setLoading(false));
            }
        };
        fetchUser();
    }, []);

    return (
        <>
            {loading && <Loading />}

            <Routes>
                <Route path="/signup" element={<SignUpPage />} />
                <Route path="/login" element={<LogInPage />} />

                <Route element={<ProtectedRoute />}>
                    <Route path="/" element={<Homepage />} />
                    <Route path="/tasks" element={<MyTasksPage />} />
                    <Route path="/calendar" element={<CalendarPage />} />
                    <Route path="/settings" element={<SettingsPage />} />
                </Route>
            </Routes>
        </>
    );
}

export default App;
