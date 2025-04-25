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
import EngergyUtilities from './what-to-do/EnergyUtilities';
import Manufacturing from './what-to-do/Manufacturing';
import Distribution from './what-to-do/Distribution';
import Healthcare from './what-to-do/Healthcare';
import Retail from './what-to-do/Retail';
import MediaAndInformation from './what-to-do/MediaandInformation';
import Insurance from './what-to-do/Insurance';
import TravelAndLogistics from './what-to-do/TravelandLogistics';

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
            { path: '/life-sciences', element: <LifeSciences></LifeSciences> },
            { path: '/energy-and-utilities', element: <EngergyUtilities></EngergyUtilities> }
            , { path: '/manufacturing', element: <Manufacturing></Manufacturing> },
            { path: '/distribution', element: <Distribution></Distribution> },
            { path: '/healthcare', element: <Healthcare></Healthcare> },
            { path: '/retail', element: <Retail></Retail> },
            { path: '/media-and-information', element: <MediaAndInformation></MediaAndInformation> },
            { path: '/insurance', element: <Insurance></Insurance> },
            { path: "/travel-and-logistics", element: <TravelAndLogistics></TravelAndLogistics> }

        ]
    }
]);

export default router;



