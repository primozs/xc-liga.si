import axios from 'axios';
// import testResults from '../results/results.json';
// import testResults from '../results/results20202021.json';

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

export const transformResults = (results: ApiResult[]): TransformedResults => {
  let totalNoFlights = 0;
  let totalSeasonDist = 0;
  let noPilots = results.length;
  const nResults = results.map((result, index) => {
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
      rank,
      noFlights,
      totalDist,
      flights: nFlights
    };
  });

  return { results: nResults, totalNoFlights, noPilots, totalSeasonDist };
};

export const getResultsApiJob = async (
  url: string
): Promise<TransformedResults | null> => {
  try {
    const { data } = await axios.get<ApiResult[]>(url);
    // const data = testResults;
    return transformResults(data);
  } catch {
    return null;
  }
};
