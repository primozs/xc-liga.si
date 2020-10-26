import React from 'react';
import { GetServerSideProps } from 'next';
import { QueryCache } from 'react-query';
import { dehydrate } from 'react-query/hydration';
import { getCurrentSeason } from 'app/score/state/utils';
import { apiGetSeasonData, formatSeasonData } from 'app/score/state/service';
import ScorePageView from 'app/score/views/ScorePageView';

export default function Home() {
  return <ScorePageView />;
}

export const getServerSideProps: GetServerSideProps = async () => {
  const queryCache = new QueryCache();
  const season = getCurrentSeason();

  await queryCache.prefetchQuery(['season-data', season], async () => {
    const data = await apiGetSeasonData(season);
    const formated = formatSeasonData(data);
    return formated;
  });

  return {
    props: {
      dehydratedState: dehydrate(queryCache),
    },
  };
};
