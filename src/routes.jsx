import React from "react";
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
} from "react-router-dom";
import App from "./App";

import Demo from "./Demo";
import WhatWeDo from "./pages/WhatWeDo";




const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<App />}>
            <Route path="what-we-do" element={<WhatWeDo></WhatWeDo>}>
                <Route path="overview" element={<Demo />} />
            </Route>
        </Route>
    )
);

export default router;
