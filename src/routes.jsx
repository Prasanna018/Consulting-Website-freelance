import React from "react";
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
} from "react-router-dom";
import App from "./App";

import Demo from "./Demo";
import WhatWeDo from "./pages/WhatWeDo";
import Industries from "./pages/mainPages/Industries";
import Banking from "./what-to-do/Banking";



const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<App />}>

            <Route path="what-we-do" element={<WhatWeDo />}>
                <Route index element={<Demo />} /> {/* Default route */}
                <Route path="overview" element={<Demo />} />
                <Route path="industries" element={<Industries />}>
                    {/* Nested routes under 'industries' */}
                </Route>
                <Route path="industries/banking" element={<Banking />} />
            </Route>
        </Route>
    )
);

export default router;
