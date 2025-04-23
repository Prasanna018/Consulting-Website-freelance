import React from 'react';
import './App.css';
import Header from './components/Header';
import { Outlet } from 'react-router-dom';

function App() {

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* Fixed Header */}
      <div className="fixed top-0 w-full z-50">
        <Header />
      </div>

      {/* Fixed Background Image Section */}
      <div className="relative h-screen w-full">
        <img
          src="/bgimg.jpg"
          className="fixed top-0 left-0 w-full h-full object-cover z-0 opacity-70 pointer-events-none"
          alt="Background"
        />
        <div className="absolute top-0 left-0 w-full h-full z-10 flex items-center justify-center">
          <div className="text-white text-4xl font-bold pt-[72px]">
            Welcome to Our Site
          </div>
        </div>
      </div>

      {/* Scrollable Content on Top of Background Image */}
      <div className="relative z-20 bg-white ">
        <div className=" bg-opacity-90 rounded-lg  shadow-lg">
          <p className="text-lg font-semibold">Scrollable content starts here...</p>

          other content should be here
        </div>

        {/* Add <Outlet /> if you're using nested routes */}

      </div>
    </div>
  );
}

export default App;
