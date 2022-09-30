import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../screens/Home";
import { SignIn } from "../screens/SignIn";

import { ProtectedRoute } from "./ProtectedRoute";

export const MainRoute = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/signin" element={<SignIn />} />
                <Route
                    path="/home"
                    element={
                        <ProtectedRoute isAllowed={true}>
                            <Home />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/"
                    element={
                        <ProtectedRoute isAllowed={false}>
                            <Home />
                        </ProtectedRoute>
                    }
                />
            </Routes>
        </BrowserRouter>
    );
};
