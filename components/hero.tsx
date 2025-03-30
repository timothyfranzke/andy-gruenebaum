
"use client";
import { useEffect, useState } from 'react';

interface HeroProps {
  name: string;
  position: string;
  club: string;
}

const HeroSection = ({ name, position, club }: HeroProps) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Calculate parallax effect (image moves slower than scroll)
  const yPos = scrollPosition * 0.5;
  
  return (
    <section className="relative bg-black text-white overflow-hidden" style={{ height: '80vh' }}>
      <div 
        className="absolute inset-0 z-0"
        style={{ 
          transform: `translateY(${yPos}px)`,
          height: '100%',
          width: '100%'
        }}
      >
        <img 
          src="/ag.webp" 
          alt="Andy Grunnebaum" 
          className="w-full h-full object-cover"
          style={{ 
            objectPosition: 'center',
            transition: 'transform 0.1s ease-out'
          }}
        />
        {/* Gradient overlays for top and bottom fade to black */}
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black to-transparent opacity-80"></div>
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black to-transparent opacity-80"></div>
      </div>
      <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center">
        <div className="max-w-2xl">
          <h1 className="text-6xl md:text-8xl font-bold mb-4 tracking-wider">{name}</h1>
          <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-wider text-blue-500">GRUNNEBAUM</h2>
          <p className="text-2xl mb-6">{position} - {club}</p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg font-semibold rounded-sm transition duration-300">
            OFFICIAL STORE
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;