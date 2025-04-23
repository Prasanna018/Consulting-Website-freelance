import React from 'react';
import './App.css';
import Header from './components/Header';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="relative h-screen">
      {/* Fixed Header */}
      <div className="fixed top-0 w-full z-50">
        <Header />
      </div>

      {/* Scrollable Content */}
      <div className="pt-[72px] h-full overflow-auto relative z-10">
        {/* Background Image */}
        <img
          src="/bgimg.jpg"
          className="h-full w-full absolute top-0 left-0 object-cover z-0 opacity-70 pointer-events-none"
          alt="Background"
        />

        {/* Main Content */}

      </div>
    </div>
  );
}

export default App;
