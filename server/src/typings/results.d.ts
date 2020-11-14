type ApiFlight = {
  id: number;
  type: number; // 1 freeflight, 2 triangle, 3-FAI triangle.
  pts: number;
};

type ApiResult = {
  pilot: number;
  score: number;
  name: string;
  junior: 0 | 1;
  flights: ApiFlight[];
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

type ApiPilot = {
  id: number;
  lsz: string; // id
  birth: string; // YYYYMMDD
  gender: 'F' | 'M';
  name: string;
};

type DbPilot = Omit<ApiPilot, 'id'> & {
  _id: number;
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
