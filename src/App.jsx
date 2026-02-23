import Header from "./componentes/header/header.component";
import Navbar from "./componentes/navbar/navbar.component";
import { Routes, Route } from "react-router-dom";

import "./App.css";

import Homepage from "./pages/homepage/homepage.jsx";
import MyTasksPage from "./pages/taskpage/mytasks.jsx";
import CalendarPage from "./pages/calendarpage/calendar.jsx";
import SettingsPage from "./pages/settingspage/settings.jsx";

function App() {
    return (
        <>
            <Header />
            <Navbar />
            <main className="content">
                <Routes>
                    <Route path="/" element={<Homepage />} />
                    <Route path="/tasks" element={<MyTasksPage />} />
                    <Route path="/calendar" element={<CalendarPage />} />
                    <Route path="/settings" element={<SettingsPage />} />
                </Routes>
            </main>
        </>
    );
}

export default App;
