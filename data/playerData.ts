// src/data/playerData.js

const playerData = {
    name: "ANDY",
    fullName: "ANDY GRUNNEBAUM",
    position: "Goalkeeper",
    club: "FC United",
    stats: {
      club: {
        matches: 178,
        cleanSheets: 72,
        saves: 545,
        trophies: 5,
        savePercentage: 78,
      },
      national: {
        matches: 42,
        cleanSheets: 18,
        saves: 124,
        trophies: 1,
        savePercentage: 81,
      }
    },
    upcomingMatches: [
      {
        date: { day: "29", month: "MAR" },
        time: "18:30",
        timezone: "GMT -5",
        matchday: "Matchday 5",
        league: "Premier League",
        homeTeam: "FC United",
        homeTeamLogo: "/images/teams/fc-united.png",
        awayTeam: "City FC",
        awayTeamLogo: "/images/teams/city-fc.png",
        ticketLink: "https://tickets.fcunited.com/match/city-fc"
      },
      {
        date: { day: "02", month: "APR" },
        time: "20:00",
        timezone: "GMT -5",
        matchday: "Quarter Finals",
        league: "Champions Cup",
        homeTeam: "Regional SC",
        homeTeamLogo: "/images/teams/regional-sc.png",
        awayTeam: "FC United",
        awayTeamLogo: "/images/teams/fc-united.png",
        ticketLink: "https://tickets.regional-sc.com/match/fc-united"
      }
    ],
    pastMatches: [
      {
        date: { day: "16", month: "MAR" },
        result: "FINISHED",
        matchday: "Matchday 4",
        league: "Premier League",
        homeTeam: "United FC",
        homeTeamLogo: "/images/teams/united-fc.png",
        homeScore: 2,
        awayTeam: "FC United",
        awayTeamLogo: "/images/teams/fc-united.png",
        awayScore: 0,
        highlightsLink: "https://highlights.premierleague.com/united-fc-vs-fc-united"
      }
    ],
    news: [
      {
        id: 1,
        title: "ANDY'S HEROIC PERFORMANCE SECURES VICTORY",
        excerpt: "Andy Grunnebaum made 8 crucial saves to help FC United secure a vital win in their campaign for the Premier League title...",
        content: "In a display of goalkeeping brilliance, Andy Grunnebaum put on a masterclass performance last Saturday, making 8 crucial saves to help FC United secure a vital 2-0 win against title rivals City FC. The clean sheet marks Grunnebaum's 15th of the season, further cementing his position as the league's top goalkeeper.\n\nFC United manager Thomas Weber praised Grunnebaum's performance, saying: 'Andy was simply phenomenal today. Some of those saves were truly world-class. He's been our rock at the back all season.'\n\nThe win puts FC United three points clear at the top of the table with just five games remaining in the season.",
        image: "/images/news/heroic-performance.jpg",
        date: "March 25, 2025",
        tags: ["Match Report", "Premier League"]
      },
      {
        id: 2,
        title: "SELECTED FOR NATIONAL TEAM SQUAD",
        excerpt: "Andy has been selected for the upcoming international fixtures against Brazil and Argentina...",
        content: "National team coach Michael Johnson has named Andy Grunnebaum in his 23-man squad for the upcoming friendly matches against Brazil and Argentina. This marks Grunnebaum's 43rd call-up to the national team.\n\n'Andy continues to be one of the best goalkeepers in the world,' said Johnson at today's press conference. 'His experience and leadership will be crucial in these high-profile matches.'\n\nThe matches are scheduled for April 12th against Brazil and April 16th against Argentina, both at National Stadium.",
        image: "/images/news/national-team-selection.jpg", 
        date: "March 20, 2025",
        tags: ["National Team", "Selection"]
      },
      {
        id: 3,
        title: "CLEAN SHEET MILESTONE REACHED",
        excerpt: "With yesterday's shutout, Andy Grunnebaum has reached 70 clean sheets for FC United...",
        content: "FC United goalkeeper Andy Grunnebaum reached a remarkable milestone in his career yesterday, recording his 70th clean sheet for the club in a 3-0 victory over Eastern United. This achievement places him second in the club's all-time clean sheet records, just 12 behind legendary keeper Thomas Richards.\n\nSince joining FC United in 2021, Grunnebaum has established himself as one of the premier goalkeepers in the league, winning the Golden Glove award twice in four seasons.\n\n'It's a special moment for me,' Grunnebaum said after the match. 'Clean sheets are always a team effort, but it's nice to reach these personal milestones along the way.'",
        image: "/images/news/clean-sheet-milestone.jpg",
        date: "March 16, 2025",
        tags: ["Milestone", "Achievement"]
      },
      {
        id: 4,
        title: "INTERVIEW: GRUNNEBAUM ON GOALKEEPING TECHNIQUE",
        excerpt: "In an exclusive interview, Andy discusses his approach to the modern goalkeeping requirements...",
        content: "In an exclusive interview with FC United's official website, Andy Grunnebaum shared insights into his goalkeeping philosophy and how the position has evolved in modern football.\n\n'Today's goalkeeper needs to be complete,' explained Grunnebaum. 'It's not just about making saves anymore. You need to be comfortable with the ball at your feet, good at distribution, and able to read the game to act as a sweeper when needed.'\n\nGrunnebaum also discussed his training regimen, which includes specialized footwork drills and regular video analysis sessions with the coaching staff.\n\n'I'm always looking to improve every aspect of my game,' he said. 'The moment you think you've mastered goalkeeping is the moment you start declining.'",
        image: "/images/news/interview-technique.jpg", 
        date: "March 10, 2025",
        tags: ["Interview", "Technique"]
      }
    ],
    gallery: [
      { 
        id: 1, 
        title: "Training Session", 
        image: "/images/gallery/training-session.jpg",
        description: "Andy practicing diving saves during the pre-season training camp",
        date: "January 15, 2025"
      },
      { 
        id: 2, 
        title: "Match vs. City FC", 
        image: "/images/gallery/match-city-fc.jpg",
        description: "Spectacular save against City FC striker in the derby match",
        date: "February 23, 2025"
      },
      { 
        id: 3, 
        title: "Award Ceremony", 
        image: "/images/gallery/award-ceremony.jpg",
        description: "Receiving the Golden Glove award for the 2024 season",
        date: "December 10, 2024"
      },
      { 
        id: 4, 
        title: "Fan Meeting", 
        image: "/images/gallery/fan-meeting.jpg",
        description: "Meeting with young fans at the FC United foundation event",
        date: "March 5, 2025"
      },
      { 
        id: 5, 
        title: "National Team", 
        image: "/images/gallery/national-team.jpg",
        description: "Representing the national team in the World Cup qualifier",
        date: "November 18, 2024"
      },
      { 
        id: 6, 
        title: "Charity Event", 
        image: "/images/gallery/charity-event.jpg",
        description: "Participating in the annual charity match for children's hospital",
        date: "February 12, 2025"
      }
    ],
    sponsors: [
      { name: "SportsBrand", logo: "/images/sponsors/sports-brand.png", url: "https://sportsbrand.com" },
      { name: "TopEquipment", logo: "/images/sponsors/top-equipment.png", url: "https://topequipment.com" },
      { name: "EliteWear", logo: "/images/sponsors/elite-wear.png", url: "https://elitewear.com" },
      { name: "ProKeeper", logo: "/images/sponsors/pro-keeper.png", url: "https://prokeeper.com" },
      { name: "HealthDrink", logo: "/images/sponsors/health-drink.png", url: "https://healthdrink.com" }
    ],
    biography: {
      intro: "Andy Grunnebaum is one of the most accomplished goalkeepers in modern football, known for his exceptional reflexes, commanding presence, and ability to perform in crucial moments.",
      earlyLife: "Born on May 15, 1995, in Chicago, Illinois, Grunnebaum showed early promise as a goalkeeper from the age of seven. While many kids wanted to score goals, Andy was fascinated by the art of preventing them. He joined the Chicago Youth Academy at age 12, where his talent quickly became apparent.",
      careerBeginnings: "Grunnebaum turned professional at 18, signing with Chicago City FC in the second division. His spectacular performances earned him a move to European football just two years later, joining German club FC Munich II.",
      careerHighlights: "After proving himself in Germany, Grunnebaum made a high-profile transfer to FC United in 2021. Since then, he has established himself as one of the world's premier goalkeepers, winning the League Cup twice and the Champions Cup once. On the international stage, he has earned 42 caps for his country, participating in the 2022 World Cup and 2024 Continental Championship.",
      playingStyle: "Known for his exceptional shot-stopping ability, commanding presence in the box, and distribution skills, Grunnebaum represents the modern goalkeeper. His ability to make game-changing saves in crucial moments has earned him the nickname 'The Wall' among FC United supporters.",
      personalLife: "Off the field, Grunnebaum is involved in various charitable initiatives, with a particular focus on youth sports development in underserved communities. He established the Grunnebaum Foundation in 2023, which provides goalkeeping training and equipment to young players who lack resources.",
      achievements: [
        "Premier League Golden Glove: 2022-23, 2023-24",
        "FC United Player of the Year: 2022-23",
        "Champions Cup Winner: 2023-24",
        "League Cup Winner: 2021-22, 2024-25",
        "International Debut: March 2020 vs. Mexico"
      ]
    },
    socialLinks: {
      instagram: "https://instagram.com/andygrunnebaum",
      twitter: "https://twitter.com/andygrunnebaum",
      facebook: "https://facebook.com/andygrunnebaum",
      youtube: "https://youtube.com/andygrunnebaum"
    }
  };
  
  export default playerData;