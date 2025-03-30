"use client";

import StatsDisplay from "./stats-display";
import { useState } from "react";

type StatType = {
  matches: number;
  cleanSheets: number;
  saves: number;
  trophies: number;
  savePercentage: number;
};

type Stats = {
  club: StatType;
  national: StatType;
};

type StatsTabType = keyof Stats;

const StatsSection = ({ stats }: { stats: Stats }) => {
    const [activeStatsTab, setActiveStatsTab] = useState<StatsTabType>('club');
    
    return (
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-center mb-8">
            <img 
              src="/api/placeholder/120/120" 
              alt="Player Logo" 
              className="w-24 h-24"
            />
          </div>
          
          <div className="flex justify-center mb-6">
            <h2 className="text-3xl font-bold">ANDY GRUNNEBAUM STATS</h2>
          </div>
          
          <div className="flex justify-center mb-10">
            <div className="inline-flex rounded-md shadow-sm">
              <button
                onClick={() => setActiveStatsTab('club')}
                className={`px-6 py-2 text-sm font-semibold ${
                  activeStatsTab === 'club' 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                } rounded-l-md transition duration-300`}
              >
                CLUB
              </button>
              <button
                onClick={() => setActiveStatsTab('national')}
                className={`px-6 py-2 text-sm font-semibold ${
                  activeStatsTab === 'national' 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                } rounded-r-md transition duration-300`}
              >
                NATIONAL TEAM
              </button>
            </div>
          </div>
          
          <StatsDisplay stats={stats[activeStatsTab]} />
          
          <div className="text-center mt-6 text-sm">
            Powered by <a href="#" className="text-blue-400 hover:underline">PlayerStats</a>
          </div>
        </div>
      </section>
    );
  };

  export default StatsSection;