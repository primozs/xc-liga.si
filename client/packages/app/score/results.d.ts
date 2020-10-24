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
