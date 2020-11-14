import React from 'react';
import { GetServerSideProps } from 'next';
import { QueryCache } from 'react-query';
import { dehydrate } from 'react-query/hydration';
import { getCurrentSeason } from 'app/score/state/utils';
import ScorePageView from 'app/score/views/ScorePageView';
import { prefetchResultsData } from 'app/score/state/service';

export default function Home() {
  return <ScorePageView />;
}

export const getServerSideProps: GetServerSideProps = async () => {
  const queryCache = new QueryCache();
  const season = getCurrentSeason();

  await prefetchResultsData(queryCache, season);

  return {
    props: {
      dehydratedState: dehydrate(queryCache),
    },
  };
};
