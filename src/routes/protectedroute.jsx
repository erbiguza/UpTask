import "./protectedroute.scss";
import { Navigate, Outlet } from "react-router-dom";
import Header from "../components/layout/header/header.component";
import Sidebar from "../components/layout/navbar/navbar.component";

import { loadingSelector } from "../redux/loading/loadingSelector.js";
import { userSelector } from "../redux/user/userSelector.js";

function ProtectedRoute() {
    const user = userSelector();
    const loading = loadingSelector();

    if (Object.keys(user).length === 0 && !loading) {
        return <Navigate to="/signup" replace />;
    }

    return (
        <>
            <Header user={user} />
            <Sidebar />
            <main className="content">
                <Outlet />
            </main>
        </>
    );
}

export default ProtectedRoute;
