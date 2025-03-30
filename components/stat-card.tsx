const StatBar = ({ value, maxValue }: { value: number; maxValue: number }) => {
    const percentage = (value / maxValue) * 100;
    return (
      <div className="w-full bg-gray-200 h-4 rounded-full overflow-hidden mt-1">
        <div 
          className="h-full bg-blue-600 transition-all duration-1000 ease-out" 
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    );
  };    

  export default StatBar;
  