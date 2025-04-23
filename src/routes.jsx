import React from "react";
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
} from "react-router-dom";
import App from "./App";
import What from "./pages/what";
import Demo from "./Demo";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<App />}>
            <Route path="what-we-do" element={<What />}>
                <Route path="overview" element={<Demo />} />
            </Route>
        </Route>
    )
);

export default router;
