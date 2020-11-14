import React from 'react';
import { GetServerSideProps } from 'next';
import { QueryCache } from 'react-query';
import { dehydrate } from 'react-query/hydration';
import ScorePageView from 'app/score/views/ScorePageView';
import { prefetchResultsData } from 'app/score/state/service';

type Props = {
  season: string;
};

export default function Season(props: Props) {
  return <ScorePageView {...props} />;
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const queryCache = new QueryCache();
  const season = (params?.id as string) || '';

  await prefetchResultsData(queryCache, season);

  return {
    props: {
      dehydratedState: dehydrate(queryCache),
      season,
    },
  };
};
