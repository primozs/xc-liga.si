import React from 'react';
import Head from 'next/head';
import ScoreHeroView from 'app/score/views/ScoreHeroView';
import ScoreView from 'app/score/views/ScoreView';
import ScoreInfoView from 'app/score/views/ScoreInfoView';

type Props = {
  season?: string;
};

export default function ScorePageView({ season }: Props) {
  return (
    <>
      <Head>
        <title>XC Liga - {season || ''}</title>
        <meta
          name="description"
          content="XC Državno prvenstvo v jadralnem padalstvu"
          key="description"
        />
      </Head>

      <ScoreHeroView season={season} />

      <div className="container mx-auto py-4 px-0">
        <div className="flex flex-1 space-x-0 sm:space-x-4 flex-col sm:flex-row overflow-hidden">
          <ScoreInfoView season={season} />
          <ScoreView season={season} />
        </div>
      </div>
    </>
  );
}
