import React from "react";
import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import App from "./App";
import What from "./pages/what";
const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<App />}>
            <Route path="what-we-do" element={<What></What>}>
            </Route>

        </Route>
    )
);

export default router