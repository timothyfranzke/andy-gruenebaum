import StatBar from "./stat-card";

const StatsDisplay = ({ stats }: { stats: { matches: number; cleanSheets: number; saves: number; trophies: number; savePercentage: number; } }) => {
    return (
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="text-center">
            <div className="text-5xl font-bold text-blue-400 mb-2">{stats.matches}</div>
            <p className="text-lg">MATCHES</p>
            <StatBar value={stats.matches} maxValue={200} />
          </div>
          
          <div className="text-center">
            <div className="text-5xl font-bold text-blue-400 mb-2">{stats.cleanSheets}</div>
            <p className="text-lg">CLEAN SHEETS</p>
            <StatBar value={stats.cleanSheets} maxValue={100} />
          </div>
          
          <div className="text-center">
            <div className="text-5xl font-bold text-blue-400 mb-2">{stats.saves}</div>
            <p className="text-lg">SAVES</p>
            <StatBar value={stats.saves} maxValue={600} />
          </div>
          
          <div className="text-center">
            <div className="text-5xl font-bold text-blue-400 mb-2">{stats.trophies}</div>
            <p className="text-lg">TROPHIES</p>
            <StatBar value={stats.trophies} maxValue={10} />
          </div>
        </div>
        
        <div className="bg-gray-800 rounded-lg p-6">
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-12">
            <div className="text-center">
              <p className="text-lg mb-2">SAVE PERCENTAGE</p>
              <div className="text-4xl font-bold text-blue-400">{stats.savePercentage}%</div>
            </div>
            
            <div className="text-center">
              <p className="text-lg mb-2">MINUTES PLAYED</p>
              <div className="text-4xl font-bold text-blue-400">{stats.matches * 90}</div>
            </div>
            
            <div className="text-center">
              <p className="text-lg mb-2">CLEAN SHEET RATIO</p>
              <div className="text-4xl font-bold text-blue-400">
                {(stats.cleanSheets / stats.matches * 100).toFixed(1)}%
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };    

  export default StatsDisplay;