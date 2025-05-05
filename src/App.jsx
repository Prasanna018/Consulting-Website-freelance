import React from 'react';
import './App.css';
import Header from './components/Header';
import { Outlet, useLocation } from 'react-router-dom';

function App() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <>
      {/* Fixed Header for all pages */}
      <div className="fixed top-0 left-0 w-full z-50">
        <Header />
      </div>

      {/* Main content area with padding for the fixed header */}
      <main className="pt-16 min-h-screen w-full">
        {/* Video background only for homepage */}
        {isHomePage && (
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
        )}

        {/* Hero section only for homepage */}
        {isHomePage ? (
          <>
            <div className="relative z-10 h-screen flex items-center justify-center">
              <div className="text-white text-center w-full max-w-5xl px-4">
                <h1 className="text-5xl font-bold">Data Insights Consulting — Powering Decisions with Intelligence</h1>
                <div className="mt-6">
                  <p className="text-xl">We help you make smarter decisions by transforming complex data into clear, actionable insights.</p>
                </div>
              </div>
            </div>

            {/* Scrollable Content Section */}
            <div className="relative z-20  w-full">
              <div className="container mx-auto py-8 px-4">
                <p className="text-lg font-semibold">Scrollable content starts here...</p>
              </div>
            </div>
          </>
        ) : (
          // For all other pages - no background, just content
          <div className="relative bg-[#1e2223] z-10">
            {/* <Outlet /> */}
          </div>
        )}
      </main>
    </>
  );
}

export default App;