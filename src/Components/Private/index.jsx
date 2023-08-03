import { Navigate, Outlet } from "react-router-dom";

export const PrivateRoute = (props) => {
    if (localStorage.getItem("token")) {
        return <Outlet />;
    } else {
        return <Navigate to="/account" />;

    }

};