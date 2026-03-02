import "./protectedroute.scss";
import { Navigate, Outlet } from "react-router-dom";
import Header from "../componentes/header/header.component";
import Sidebar from "../componentes/navbar/navbar.component";
import Loading from "../componentes/loading/loading.component";

import { useSelector } from "react-redux";

function ProtectedRoute() {
    const user = useSelector((state) => state.user.user);
    const loading = useSelector((state) => state.loading.loading);

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
