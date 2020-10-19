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

export const transformResults = (results: ApiResult[]): Result[] => {
  return results.map(result => {
    return {
      ...result,
      flights: result.flights.map(transformFlight)
    };
  });
};

export const getResultsApiJob = async (url: string): Promise<Result[]> => {
  try {
    const { data } = await axios.get<ApiResult[]>(url);
    // const data = testResults;
    return transformResults(data);
  } catch {
    return [];
  }
};
