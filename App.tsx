import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import RouteStatsCard from './components/RouteStatsCard';
import ProfileCard from './components/ProfileCard';
import LocationImageCard from './components/LocationImageCard';
import LocationDetails from './components/LocationDetails';

export default function App() {
  const [activeSection, setActiveSection] = useState('dashboard');

  const getTitle = (section: string) => {
    if (section === 'dashboard') return 'Overview';
    return section.charAt(0).toUpperCase() + section.slice(1);
  };

  const renderContent = () => {
    switch (activeSection) {
      case 'dashboard':
        return (
          <div className="flex-1 mt-6 grid grid-cols-1 lg:grid-cols-12 gap-6 pb-6 animate-in fade-in duration-500">
            {/* Top Row: Chart (8 cols) and Profile (4 cols) */}
            <div className="lg:col-span-8 flex flex-col">
               <RouteStatsCard />
            </div>
            <div className="lg:col-span-4 flex flex-col">
              <ProfileCard />
            </div>

            {/* Bottom Row: Image (7 cols) and Details (5 cols) */}
            <div className="lg:col-span-7 flex flex-col h-[400px]">
              <LocationImageCard />
            </div>
            <div className="lg:col-span-5 flex flex-col h-[400px]">
               <LocationDetails />
            </div>
          </div>
        );
      case 'requests':
        return (
          <div className="flex-1 flex flex-col items-center justify-center h-full text-center animate-in fade-in slide-in-from-bottom-4 duration-500">
             <div className="bg-white/10 backdrop-blur-md border border-white/10 p-12 rounded-3xl shadow-xl max-w-md w-full mx-auto">
               <h2 className="text-3xl font-light text-white mb-2">Requests</h2>
               <div className="w-16 h-1 bg-[#fcdab6] mx-auto mb-6 rounded-full"></div>
               <p className="text-white/60 text-lg">Coming Soon</p>
             </div>
          </div>
        );
      default:
        return (
          <div className="flex-1 flex flex-col items-center justify-center h-full text-center animate-in fade-in slide-in-from-bottom-4 duration-500">
             <div className="bg-white/10 backdrop-blur-md border border-white/10 p-12 rounded-3xl shadow-xl max-w-md w-full mx-auto">
               <h2 className="text-3xl font-light text-white mb-2 capitalize">{activeSection}</h2>
               <div className="w-16 h-1 bg-white/20 mx-auto mb-6 rounded-full"></div>
               <p className="text-white/60 text-lg">Work in Progress</p>
             </div>
          </div>
        );
    }
  };

  return (
    <div className="flex h-screen w-full bg-gradient-to-br from-[#4a1912] via-[#8c3a28] to-[#d68a68] text-white overflow-hidden font-sans selection:bg-orange-500 selection:text-white">
      {/* Sidebar Navigation */}
      <Sidebar activeSection={activeSection} setActiveSection={setActiveSection} />

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col p-6 pl-0 overflow-y-auto">
        <Header title={getTitle(activeSection)} />

        {renderContent()}
      </main>
    </div>
  );
}