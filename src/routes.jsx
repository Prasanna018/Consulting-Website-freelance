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
import AI from './what-to-do/AI';
import CyberSecurity from './what-to-do/CyberSecurity';
import Cloud from './what-to-do/Cloud';
import DataAnalytics from './what-to-do/DataAnalytics';
import NetworkSolution from './what-to-do/NetworkSolution';
import DataStrategy from './what-to-do/Analytical-solution/DataStrategy';
import GenerativeAI from './what-to-do/Analytical-solution/GenerativeAI';
import CloudServices from './what-to-do/Analytical-solution/CloudServices';
import DataManagement from './what-to-do/Analytical-solution/DataManagement';
import DataArchitecture from './what-to-do/Analytical-solution/DataArchitecture';
import BIAnalytics from './what-to-do/Analytical-solution/BIAnalytics';
import DataAnalyticsModernization from './what-to-do/Analytical-solution/DataAnalyticsModernization';
import DataGovernance from './what-to-do/Analytical-solution/DataGovernance';
import DataEngineeringIntegration from './what-to-do/Analytical-solution/DataEngineeringIntegration';
import DataVisualizationReporting from './what-to-do/Analytical-solution/DataVisualizationReporting';
import TechanicalSolution from './pages/mainPages/TechanicalSolution';
import AnalyticalSolution from './pages/mainPages/AnalyticalSolution';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            // Default route (if you have one)
            // { index: true, element: <Home /> },

            // What We Do section with nested routes
            {
                path: 'what-we-do',
                element: <WhatWeDo />,
                children: [
                    // { index: true, element: <Demo /> },
                    { path: 'overview', element: <Demo /> },
                    { path: 'industries', element: <Industries /> },
                    { path: 'technical-solutions', element: <TechanicalSolution /> },
                    { path: 'analytics-solutions', element: <AnalyticalSolution /> }
                ]
            },
            {
                path: "team",
                element: <Team />
            },
            {
                path: 'contact',
                element: <Contact />
            },

            // techanical solution routes
            { path: '/banking', element: <Banking /> },
            { path: 'education', element: <Education /> },
            { path: 'life-sciences', element: <LifeSciences /> },
            { path: 'energy-and-utilities', element: <EngergyUtilities /> },
            { path: 'manufacturing', element: <Manufacturing /> },
            { path: 'distribution', element: <Distribution /> },
            { path: 'healthcare', element: <Healthcare /> },
            { path: 'retail', element: <Retail /> },
            { path: 'media-and-information', element: <MediaAndInformation /> },
            { path: 'insurance', element: <Insurance /> },
            { path: "travel-and-logistics", element: <TravelAndLogistics /> },
            { path: 'artificial-intelligence', element: <AI /> },
            { path: 'cyber-security', element: <CyberSecurity /> },
            { path: 'cloud', element: <Cloud /> },
            { path: 'data-analytics', element: <DataAnalytics /> },
            { path: 'network-solutions', element: <NetworkSolution /> },

            // analytical solution routes
            { path: 'data-strategy', element: <DataStrategy /> },
            { path: 'generative-ai', element: <GenerativeAI /> },
            { path: 'cloud-services', element: <CloudServices /> },
            { path: 'data-management', element: <DataManagement /> },
            { path: 'data-architecture', element: <DataArchitecture /> },
            { path: 'bi-analytics', element: <BIAnalytics /> },
            { path: 'data-analytics-modernization', element: <DataAnalyticsModernization /> },
            { path: 'data-governance', element: <DataGovernance /> },
            { path: 'data-engineering-integration', element: <DataEngineeringIntegration /> },
            { path: 'data-visualization-reporting', element: <DataVisualizationReporting /> }
        ]
    }
]);

export default router;