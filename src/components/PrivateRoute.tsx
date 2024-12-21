import { Navigate, Outlet } from "react-router-dom";

export const PrivateRoute = () => {
  if (!localStorage.getItem("token")) return <Navigate to="/login" />;
  else {
    return <Outlet />;
  }
};
