import React from 'react';
import { GetServerSideProps } from 'next';
import { QueryCache } from 'react-query';
import { dehydrate } from 'react-query/hydration';
import { apiGetSeasonData, formatSeasonData } from 'app/score/state/service';
import ScorePageView from 'app/score/views/ScorePageView';

type Props = {
  season: string;
};

export default function Season(props: Props) {
  return <ScorePageView {...props} />;
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const queryCache = new QueryCache();
  const season = (params?.id as string) || '';

  await queryCache.prefetchQuery(['season-data', season], async () => {
    const data = await apiGetSeasonData(season);
    const formated = formatSeasonData(data);
    return formated;
  });

  return {
    props: {
      dehydratedState: dehydrate(queryCache),
      season,
    },
  };
};
