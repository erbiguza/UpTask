import "./protectedroute.scss";
import { Navigate, Outlet } from "react-router-dom";
import Header from "../componentes/header/header.component";
import Sidebar from "../componentes/navbar/navbar.component";

function ProtectedRoute({ user }) {
    if (Object.keys(user).length === 0) {
        return <Navigate to="/signup" replace />;
    }

    return (
        <>
            <Header />
            <Sidebar />
            <main className="content">
                <Outlet />
            </main>
        </>
    );
}

export default ProtectedRoute;
