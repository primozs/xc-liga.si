import { usePaginatedQuery, useQuery } from 'react-query';
import { useRecoilState } from 'recoil';
import format from 'date-fns/format';
import getConfig from 'next/config';
import axios from 'axios';
import {
  getSeasonYear,
  getDuration,
  getCurrentSeason,
} from 'app/score/state/utils';
import { selectedSeason } from './scoreState';

const { publicRuntimeConfig, serverRuntimeConfig } = getConfig();

const getApiHost = () => {
  const host =
    serverRuntimeConfig.PRIVATE_API_HOST || publicRuntimeConfig.PUBLIC_API_HOST;
  return host;
};

export const apiGetSeasonData = async (
  season: string
): Promise<SeasonData | null> => {
  try {
    const host = getApiHost();
    const url = `${host}/results?season=${season}`;

    const res = await axios.get<SeasonData[]>(url);
    return res.data[0] || null;
  } catch {
    return null;
  }
};

const getAvailableSeasonsData = async (): Promise<SeasonInfo[]> => {
  try {
    const host = getApiHost();
    const url = `${host}/results?$select[]=season&$select[]=_id&$select[]=lastUpdate`;

    const res = await axios.get<SeasonData[]>(url);
    return res.data.map((item) => {
      return {
        season: item.season,
        title: getSeasonYear(item.season),
        id: item._id,
        lastUpdate: item.lastUpdate,
      };
    });
  } catch {
    return [];
  }
};

export const useApiGetSeasons = () => {
  return useQuery(['seasons-info'], async () => {
    const data = await getAvailableSeasonsData();
    return data.sort((a, b) => {
      return b.lastUpdate - a.lastUpdate;
    });
  });
};

export const formatSeasonData = (data?: SeasonData | null): FSeasonData => {
  const language = 'sl';
  const season = data?.season || '';
  const year = getSeasonYear(data?.season);
  const duration = getDuration(data?.season);
  const results = data?.results || [];
  const noPilots = data?.noPilots || 0;
  const totalNoFlights = data?.totalNoFlights || 0;
  const totalSeasonDist = data?.totalSeasonDist
    ? Math.round(data.totalSeasonDist).toLocaleString(language) + ' km'
    : '';
  const sex = 'M/Ž';
  const gliders = 'EN-A, EN-B, EN-C, EN-D, CCC';
  const updated = data?.lastUpdate
    ? format(data.lastUpdate, 'dd.MM.yyyy HH:mm')
    : '';
  const first = results[0] ? results[0].name : 'mesto';
  const second = results[1] ? results[1].name : 'mesto';
  const third = results[2] ? results[2].name : 'mesto';
  return {
    season,
    year,
    duration,
    results,
    noPilots,
    totalNoFlights,
    totalSeasonDist,
    sex,
    gliders,
    updated,
    first,
    second,
    third,
  };
};

export const useApiGetResultsData = (initSeason?: string) => {
  let [season, setSeason] = useRecoilState(selectedSeason);
  if (!season && initSeason) season = initSeason;
  if (!season) season = getCurrentSeason();

  return usePaginatedQuery(
    ['season-data', season],
    async () => {
      const data = await apiGetSeasonData(season);
      if (data) {
        setSeason(season);
      }

      const formated = formatSeasonData(data);
      return formated;
    },
    {
      enabled: !!season,
    }
  );
};
