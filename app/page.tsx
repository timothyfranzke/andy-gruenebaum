import Image from "next/image";
import { Header } from '../components/header';
import MatchesSection from "@/components/match-section";
import WelcomeSection from "@/components/welcome";
import NewsSection from "@/components/news-section";
import StatsSection from "@/components/stats-section";
import GallerySection from "@/components/gallery";
import SponsorsSection from "@/components/sponsors";
import Footer from "@/components/footer";
import playerData from "@/data/playerData";
import HeroSection from "@/components/hero";

const socialLinks = {
  instagram: "https://instagram.com/andygruenebaum",
  twitter: "https://twitter.com/andygruenebaum",
  facebook: "https://facebook.com/andygruenebaum",
  youtube: "https://youtube.com/@andygruenebaum"
};

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header socialLinks={playerData.socialLinks} />
      
      <main>
        {/* Hero section with player name and position */}
        <HeroSection 
          name={playerData.name} 
          position={playerData.position} 
          club={playerData.club} 
        />
        
        {/* Matches section with countdown and match cards */}
        <MatchesSection 
          upcomingMatches={playerData.upcomingMatches}
          pastMatches={playerData.pastMatches}
        />
        
        {/* Welcome section */}
        <WelcomeSection />
        
        {/* News section */}
        <NewsSection news={playerData.news} />
        
        {/* Stats section */}
        <StatsSection stats={playerData.stats} />
        
        {/* Gallery section */}
        <GallerySection gallery={playerData.gallery} />
        
        {/* Sponsors section */}
        <SponsorsSection sponsors={playerData.sponsors} />
      </main>
      
      <Footer socialLinks={playerData.socialLinks} />
    </div>
  );
}
