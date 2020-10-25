import React from 'react';
import { GetServerSideProps } from 'next';
import { QueryCache } from 'react-query';
import { dehydrate } from 'react-query/hydration';
import Head from 'next/head';
import Box from 'common/Box';
import ScoreHeroView from 'app/score/views/ScoreHeroView';
import ScoreView from 'app/score/views/ScoreView';
import ScoreInfoView from 'app/score/views/ScoreInfoView';
import { getCurrentSeason } from 'app/score/state/utils';
import { apiGetSeasonData, formatSeasonData } from 'app/score/state/service';

export default function Home() {
  return (
    <>
      <Head>
        <title>XC Liga</title>
        <meta
          name="description"
          content="XC Državno prvenstvo v jadralnem padalstvu"
          key="description"
        />
      </Head>

      <ScoreHeroView />

      <div className="container mx-auto py-8 px-0 sm:px-4">
        <Box className="flex-1 space-x-0 sm:space-x-4 flex-col sm:flex-row">
          <ScoreInfoView />
          <ScoreView />
        </Box>
      </div>
    </>
  );
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
