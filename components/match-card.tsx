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

interface MatchCardProps {
  match: Match;
  isPast?: boolean;
}

const MatchCard = ({ match, isPast = false }: MatchCardProps) => {
  const isPastMatch = (match: Match): match is PastMatch => {
    return 'result' in match;
  };

  return (
    <div className="bg-gray-800 rounded-lg p-6">
      <div className="flex justify-between items-center mb-4">
        <div>
          <div className="text-sm text-gray-400">{match.matchday}</div>
          <div className="text-sm text-gray-400">{match.league}</div>
        </div>
        <div className="text-right">
          <div className="text-xl font-bold">{match.date.day}</div>
          <div className="text-sm text-gray-400">{match.date.month}</div>
          {!isPastMatch(match) && (
            <div className="text-sm text-gray-400">
              {match.time} {match.timezone}
            </div>
          )}
        </div>
      </div>
      
      <div className="flex justify-between items-center mb-4">
        <div className="text-center">
          <img src={match.homeTeamLogo} alt={match.homeTeam} className="w-12 h-12 mx-auto" />
          <p className="text-sm mt-1">{match.homeTeam}</p>
          {isPastMatch(match) && (
            <div className="text-xl font-bold mt-1">{match.homeScore}</div>
          )}
        </div>
        <div className="text-xl font-bold">
          {isPastMatch(match) ? match.result : 'VS'}
        </div>
        <div className="text-center">
          <img src={match.awayTeamLogo} alt={match.awayTeam} className="w-12 h-12 mx-auto" />
          <p className="text-sm mt-1">{match.awayTeam}</p>
          {isPastMatch(match) && (
            <div className="text-xl font-bold mt-1">{match.awayScore}</div>
          )}
        </div>
      </div>
      
      <div className="text-center">
        {isPastMatch(match) ? (
          <a
            href={match.highlightsLink}
            className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300"
          >
            Watch Highlights
          </a>
        ) : (
          <a
            href={match.ticketLink}
            className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300"
          >
            Get Tickets
          </a>
        )}
      </div>
    </div>
  );
};

export default MatchCard;