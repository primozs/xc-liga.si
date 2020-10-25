type Flight = {
  id: number;
  type: number;
  pts: number;
  dist: number;
};

type Result = {
  rank: number;
  totalDist: number;
  noFlights: number;
  pilot: number;
  score: number;
  name: string;
  flights: Flight[];
};

type SeasonData = {
  _id: string;
  season: string;
  results: Result[];
  totalNoFlights: number;
  totalSeasonDist: number;
  noPilots: number;
  lastUpdate: number;
};

type SeasonInfo = {
  season: string;
  title: string;
  id: string;
  lastUpdate: number;
};

type FSeasonData = {
  season: string;
  year: string;
  duration: string;
  results: Result[];
  noPilots: number;
  totalNoFlights: number;
  totalSeasonDist: string;
  sex: string;
  gliders: string;
  updated: string;
  first: string;
  second: string;
  third: string;
};
