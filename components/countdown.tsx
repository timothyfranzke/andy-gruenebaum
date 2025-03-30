const Countdown = () => {
    return (
      <div className="grid grid-cols-4 gap-4 w-full max-w-lg">
        <div className="text-center">
          <div className="bg-blue-600 text-4xl font-bold p-4 rounded">00</div>
          <p className="mt-2">Days</p>
        </div>
        <div className="text-center">
          <div className="bg-blue-600 text-4xl font-bold p-4 rounded">05</div>
          <p className="mt-2">Hours</p>
        </div>
        <div className="text-center">
          <div className="bg-blue-600 text-4xl font-bold p-4 rounded">33</div>
          <p className="mt-2">Min</p>
        </div>
        <div className="text-center">
          <div className="bg-blue-600 text-4xl font-bold p-4 rounded">24</div>
          <p className="mt-2">Sec</p>
        </div>
      </div>
    );
  };

  export default Countdown;