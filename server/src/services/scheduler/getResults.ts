import axios from 'axios';
import results2020 from './lzs2019-2020.json';

const transformFlight = (flight: ApiFlight): Flight => {
  switch (flight.type) {
    case 1:
      return {
        ...flight,
        dist: flight.pts
      };
    case 2:
      return {
        ...flight,
        dist: flight.pts / 1.2
      };
    case 3:
      return {
        ...flight,
        dist: flight.pts / 1.4
      };
    default:
      return {
        ...flight,
        dist: 0
      };
  }
};

type TransformedResults = {
  results: Result[];
  noPilots: number;
  totalNoFlights: number;
  totalSeasonDist: number;
};

const transformResults = (
  results: ApiResult[],
  pilots: DbPilot[]
): TransformedResults => {
  const pilotsById: Record<string, DbPilot> = {};
  for (const pilot of pilots) {
    pilotsById[String(pilot._id)] = pilot;
  }

  let totalNoFlights = 0;
  let totalSeasonDist = 0;
  let noPilots = results.length;
  const nResults = results.map(({ junior, ...result }, index) => {
    const pilot = pilotsById[String(result.pilot)];
    const rank = index + 1;
    const nFlights = result.flights.map(transformFlight);
    const noFlights = nFlights.length;
    totalNoFlights += noFlights;

    const totalDist = nFlights.reduce((acc, curr) => {
      return acc + curr.dist;
    }, 0);
    totalSeasonDist += totalDist;

    return {
      ...result,
      junior: junior === 1 ? 'T' : 'F',
      rank,
      noFlights,
      totalDist,
      flights: nFlights,
      gender: pilot ? pilot.gender : 'M'
    };
  });

  return { results: nResults, totalNoFlights, noPilots, totalSeasonDist };
};

export const getResults2020 = (pilots: DbPilot[]): TransformedResults => {
  const resultsData = transformResults(results2020 as ApiResult[], pilots);
  return resultsData;
};

export const apiGetResults = async (
  url: string,
  pilots: DbPilot[]
): Promise<TransformedResults | null> => {
  try {
    const { data } = await axios.get<ApiResult[]>(url);
    // const data = testResults;
    return transformResults(data, pilots);
  } catch {
    return null;
  }
};

export const apiGetPilots = async (url: string): Promise<ApiPilot[] | null> => {
  try {
    const { data } = await axios.get<ApiPilot[]>(url);
    return data;
  } catch {
    return null;
  }
};
