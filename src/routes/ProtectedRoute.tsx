import React from "react";
import { Navigate } from "react-router-dom";
import { ProtectedRouteType } from "../types/GeneralTypes";

export const ProtectedRoute = ({
    isAllowed,
    redirectPath = '/signin',
    children
  }: ProtectedRouteType) => {
    if (!isAllowed) {
      return <Navigate to={redirectPath} replace />;
    }
  
    return children;
  };