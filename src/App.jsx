import React from 'react';
import './App.css';
import Header from './components/Header';
import { Outlet, useLocation } from 'react-router-dom';

function App() {
  const location = useLocation();
  const isBankingPage = location.pathname.includes('/banking');
  const isEducationPage = location.pathname.includes('/education');
  const isLifeSciencesPage = location.pathname.includes('/life-sciences');
  const isTeamPage = location.pathname.includes('/team');
  const isContact = location.pathname.includes('/contact')

  // Specialized pages (Banking, Education, Life Sciences) and Team page
  if (isBankingPage || isEducationPage || isLifeSciencesPage || isTeamPage || isContact) {
    return (
      <>
        {/* Fixed Header */}
        <div className="">
          <Header />
        </div>

        {/* Main content area with padding to account for fixed header */}
        <div className="pt-16 w-full min-h-screen">
          {/* <Outlet /> */}
        </div>
      </>
    );
  }

  // Main homepage with video background
  return (
    <>
      {/* Fixed Header */}
      <div className="fixed top-0 w-full z-50">
        <Header />
      </div>

      {/* Fixed Background Video */}
      <div className="fixed top-0 left-0 w-full h-full z-0">
        <video
          src="/bgvid.webm"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-80 pointer-events-none"
        />
      </div>

      {/* Hero section with appropriate z-index and padding for header */}
      <div className="relative z-10 h-screen flex items-center justify-center pt-16">
        <div className="text-white text-center w-full max-w-5xl px-4">
          <h1 className="text-5xl font-bold">Data Insights Consulting — Powering Decisions with Intelligence</h1>
          <div className="mt-6">
            <p className="text-xl">We help you make smarter decisions by transforming complex data into clear, actionable insights.</p>
          </div>
        </div>
      </div>

      {/* Scrollable Content Section */}
      <div className="relative z-20 h-full bg-white w-full">
        <div className="container mx-auto py-8 px-4">
          <p className="text-lg font-semibold">Scrollable content starts here...</p>
          {/* <Outlet /> */}
        </div>
      </div>
    </>
  );
}

export default App;