const SponsorsSection = ({ sponsors }: { sponsors: { logo: string; name: string; }[] }) => {
    return (
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">SPONSORS</h2>
          
          <div className="flex flex-wrap justify-center items-center gap-8">
            {sponsors.map((sponsor, index) => (
              <div key={index} className="grayscale hover:grayscale-0 transition duration-300">
                <img src={sponsor.logo} alt={sponsor.name} className="h-16" />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };

  export default SponsorsSection;