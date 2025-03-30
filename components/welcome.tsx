const WelcomeSection = () => {
    return (
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl font-bold mb-4 text-gray-800">WELCOME TO THE</h2>
          <h3 className="text-4xl font-bold mb-12 text-blue-600">ANDY GRUNNEBAUM WEBSITE</h3>
          
          <div className="relative">
            <img 
              src="/api/placeholder/1200/800" 
              alt="Andy Grunnebaum in action" 
              className="mx-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>
    );
  };    

  export default WelcomeSection;