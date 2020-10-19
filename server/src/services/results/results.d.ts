type ApiFlight = {
  id: number;
  type: number; // 1 freeflight, 2 triangle, 3-FAI triangle.
  pts: number;
};

type ApiResult = {
  pilot: number;
  score: number;
  name: string;
  flights: ApiFlight[];
};

type ApiPilot = {
  id: number;
  lzs: string;
  name: string;
};

type Flight = {
  id: number;
  type: number;
  pts: number;
  dist: number;
};

type Result = {
  pilot: number;
  score: number;
  name: string;
  flights: Flight[];
};

type DbResult = {
  _id: string;
  season: string;
  results: Result[];
};
