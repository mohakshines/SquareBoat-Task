import React from "react";
import { Route } from "react-router-dom";
import { Navigate, Outlet } from 'react-router-dom';
import { isLogin } from "./Utils";

const PrivateRoute = ({ component: Component, ...rest }) => {
    return (
        // Show the component only when the user is logged in
        // Otherwise, redirect the user to /login page
        isLogin() ? <Outlet /> : <Navigate to="/login" />



    );
};

export default PrivateRoute;
