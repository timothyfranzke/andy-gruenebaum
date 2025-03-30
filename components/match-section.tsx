import Countdown from "./countdown";
import MatchCard from "./match-card";

interface BaseMatch {
  date: {
    day: string;
    month: string;
  };
  matchday: string;
  league: string;
  homeTeam: string;
  homeTeamLogo: string;
  awayTeam: string;
  awayTeamLogo: string;
}

interface UpcomingMatch extends BaseMatch {
  time: string;
  timezone: string;
  ticketLink: string;
}

interface PastMatch extends BaseMatch {
  result: string;
  homeScore: number;
  awayScore: number;
  highlightsLink: string;
}

type Match = UpcomingMatch | PastMatch;

const MatchesSection = ({ upcomingMatches, pastMatches }: { upcomingMatches: UpcomingMatch[]; pastMatches: PastMatch[] }) => {
  return (
    <section className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">NEXT MATCH</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Next Match Countdown */}
          <div className="bg-gray-800 rounded-lg p-6 flex flex-col items-center justify-center">
            <Countdown />
          </div>

          {/* Match Cards */}
          <div className="space-y-6">
            {upcomingMatches.map((match, index) => (
              <MatchCard key={index} match={match} />
            ))}
            
            {pastMatches.map((match, index) => (
              <MatchCard key={index} match={match} isPast={true} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MatchesSection;