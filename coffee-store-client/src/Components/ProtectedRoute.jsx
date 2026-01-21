import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const ProtectedRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) return <div>Loading...</div>; // optional, auth loading

    if (!user) return <Navigate to="/signin" replace state={{from: location}} />;

    return children;
};

export default ProtectedRoute;
