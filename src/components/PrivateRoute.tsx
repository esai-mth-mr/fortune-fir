import React, { useState, useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { checkAuthApi } from "../api/checkAuthApi";
import Loading from "../common/Loading";

const PrivateRoute: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  useEffect(() => {
    const checkAuthenticate = async () => {
      const pretoken = localStorage.getItem("token");

      if (pretoken) {
        const res = await checkAuthApi();
        if (res.status === 200) {
          setIsAuthenticated(true);
        } else {
          setIsAuthenticated(false);
        }
      } else {
        setIsAuthenticated(false);
      }
    };

    checkAuthenticate();
  }, []);

  // Show a loading indicator while authentication is being checked
  if (isAuthenticated === null) {
    return <Loading />;
  }

  // If authenticated, render the protected routes; otherwise, redirect to login
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
