import "./protectedroute.scss";
import { Navigate, Outlet } from "react-router-dom";
import Header from "../componentes/header/header.component";
import Sidebar from "../componentes/navbar/navbar.component";
import Loading from "../componentes/loading/loading.component";

import { loadingSelector } from "../redux/loading/loadingSelector.js";
import { userSelector } from "../redux/user/userSelector.js";

function ProtectedRoute() {
    const user = userSelector();
    const loading = loadingSelector();

    if (loading) {
        return <Loading />;
    }
    if (Object.keys(user).length === 0) {
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
