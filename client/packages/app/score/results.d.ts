type Paginated<T> = {
  total: number;
  limit: number;
  skip: number;
  data: T[];
};

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
  junior: string; // 'T' | 'F';
  gender: 'F' | 'M';
  flights: Flight[];
};

type DbSeason = {
  _id: string;
  season: string;
  noPilots: number;
  totalNoFlights: number;
  totalSeasonDist: number;
  lastUpdate: number;
};

type DbScore = Omit<Result, 'pilot'> & {
  _id: number;
  season: string;
  pilotId: number;
};

type PaginatedDbScore = Paginated<DbScore> & {
  seasonData: DbSeason;
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
  results: DbScore[];
  noPilots: number;
  totalNoFlights: number;
  totalSeasonDist: string;
  gliders: string;
  updated: string;
  first: string;
  second: string;
  third: string;
  total: number;
  limit: number;
  skip: number;
};
