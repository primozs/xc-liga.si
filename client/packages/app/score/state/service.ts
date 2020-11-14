import { useInfiniteQuery, useQuery, QueryCache } from 'react-query';
import { useRecoilState, useRecoilValue } from 'recoil';
import format from 'date-fns/format';
import getConfig from 'next/config';
import axios from 'axios';
import { resultsFilter } from 'app/score/state/scoreState';
import {
  getSeasonYear,
  getDuration,
  getCurrentSeason,
} from 'app/score/state/utils';
import {
  selectedSeason,
  selectedCategory,
  DEFAULT_CATEGORY,
} from './scoreState';

const { publicRuntimeConfig, serverRuntimeConfig } = getConfig();

export const categoryOptions = [
  { key: 'Overall', value: 'Overall' },
  { key: 'Overall Ž', value: 'Overall Ž' },
  { key: 'Junior M', value: 'Junior M' },
  { key: 'Junior Ž', value: 'Junior Ž' },
];

export const getGenderFromCategory = (category: string) => {
  switch (category) {
    case 'Overall':
      return 'M/Ž';
    case 'Overall Ž':
      return 'Ž';
    case 'Junior M':
      return 'M';
    case 'Junior Ž':
      return 'Ž';
    default:
      return 'M/Ž';
  }
};

const getFiltersFromCategory = (category?: string) => {
  const def = { junior: '', gender: '' };
  if (!category) return def;

  switch (category) {
    case 'Overall':
      return def;
    case 'Overall Ž':
      return { junior: '', gender: 'F' };
    case 'Junior M':
      return { junior: 'T', gender: 'M' };
    case 'Junior Ž':
      return { junior: 'T', gender: 'F' };
    default:
      return def;
  }
};

const getApiHost = () => {
  const host =
    serverRuntimeConfig.PRIVATE_API_HOST || publicRuntimeConfig.PUBLIC_API_HOST;
  return host;
};

const getAvailableSeasonsData = async (): Promise<SeasonInfo[]> => {
  try {
    const host = getApiHost();
    const url = `${host}/seasons?$select[]=season&$select[]=_id&$select[]=lastUpdate`;

    const res = await axios.get<DbSeason[]>(url);
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

export const formatSeasonData = (
  pData?: PaginatedDbScore | null
): FSeasonData => {
  const language = 'sl';
  const season = pData?.seasonData.season || '';
  const year = getSeasonYear(season);
  const duration = getDuration(season);
  const results = pData?.data || [];
  const noPilots = pData?.seasonData.noPilots || 0;
  const totalNoFlights = pData?.seasonData.totalNoFlights || 0;
  const totalSeasonDist = pData?.seasonData.totalSeasonDist
    ? Math.round(pData?.seasonData.totalSeasonDist).toLocaleString(language) +
      ' km'
    : '';
  const gliders = 'EN-A, EN-B, EN-C, EN-D, CCC';
  const lastUpdate = pData?.seasonData.lastUpdate;
  const updated = lastUpdate ? format(lastUpdate, 'dd.MM.yyyy HH:mm') : '';
  const first = results[0] ? results[0].name : 'mesto';
  const second = results[1] ? results[1].name : 'mesto';
  const third = results[2] ? results[2].name : 'mesto';
  const total = pData?.total || 0;
  const limit = pData?.limit || 0;
  const skip = pData?.skip || 0;
  return {
    season,
    year,
    duration,
    results,
    noPilots,
    totalNoFlights,
    totalSeasonDist,
    gliders,
    updated,
    first,
    second,
    third,
    total,
    limit,
    skip,
  };
};

type ApiGetDataOptions = {
  search: string;
  category: string;
};

const apiGetSeasonData = async (
  season: string,
  skip: number,
  options: ApiGetDataOptions
): Promise<PaginatedDbScore | null> => {
  try {
    const category = options.category;
    const { junior, gender } = getFiltersFromCategory(category);
    const juniorQ = junior ? `&junior=${junior}` : '';
    const genderQ = gender ? `&gender=${gender}` : '';

    const search = options.search;
    const searchQ = search ? `&$search=${search}` : '';

    const skipQ = skip !== undefined ? `&$skip=${skip}` : '';

    const host = getApiHost();
    const url = `${host}/scores?season=${season}&$sort[score]=-1${skipQ}${searchQ}${juniorQ}${genderQ}`;

    const res = await axios.get<PaginatedDbScore>(url);
    return res.data || null;
  } catch {
    return null;
  }
};

export const prefetchResultsData = async (
  queryCache: QueryCache,
  season: string
) => {
  const defaultOptions = {
    search: '',
    category: DEFAULT_CATEGORY,
  };
  await queryCache.prefetchQuery(
    ['season-data', season, defaultOptions],
    async () => {
      const data = await apiGetSeasonData(season, 0, defaultOptions);
      const formated = formatSeasonData(data);
      return [formated];
    }
  );
};

export const useApiGetResultsData = (initSeason?: string) => {
  let [season, setSeason] = useRecoilState(selectedSeason);
  if (!season && initSeason) season = initSeason;
  if (!season) season = getCurrentSeason();
  const filter = useRecoilValue(resultsFilter);
  const category = useRecoilValue(selectedCategory);
  const options: ApiGetDataOptions = { search: filter, category };

  return useInfiniteQuery(
    ['season-data', season, options],
    async (key, se, op, skip: number = 0) => {
      const data = await apiGetSeasonData(season, skip, options);

      if (data) {
        setSeason(season);
      }

      const formated = formatSeasonData(data);
      return formated;
    },
    {
      enabled: !!season,
      getFetchMore: (lastGroup, allGroups) => {
        const loadedCount = allGroups.length;
        const skip = lastGroup.limit * loadedCount;
        return skip;
      },
    }
  );
};
