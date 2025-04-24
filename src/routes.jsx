import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import WhatWeDo from './pages/WhatWeDo';
import Industries from './pages/mainPages/Industries';
import Demo from './Demo';

import Banking from './what-to-do/Banking'
import Education from './what-to-do/Education';
import LifeSciences from './what-to-do/LifeSciences';
import Team from './pages/Team';
import Contact from './pages/Contact';

// Import other components as needed

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            // Default route


            // What We Do section with nested routes
            {
                path: 'what-we-do',
                element: <WhatWeDo />,
                children: [
                    { index: true, element: <Demo /> },
                    { path: 'overview', element: <Demo /> },
                    { path: 'industries', element: <Industries /> },
                    // { path: 'technical-solutions', element: <TechnicalSolutions /> },
                    // { path: 'analytics-solutions', element: <AnalyticsSolutions /> }
                ]
            },
            {
                path: "team",
                element: <Team></Team>
            },
            {
                path: 'contact',
                element: <Contact></Contact>
            }
            ,
            // Full screen Banking component route
            { path: 'banking', element: <Banking /> },
            { path: 'education', element: <Education></Education> },
            { path: '/life-sciences', element: <LifeSciences></LifeSciences> }
        ]
    }
]);

export default router;



