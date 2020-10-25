import React from 'react';
import ScoreHero from 'app/score/hero/ScoreHero';
import {
  useApiGetResultsData,
  formatSeasonData,
} from 'app/score/state/service';

type Props = {
  season?: string;
};

const ScoreHeroView = ({ season }: Props) => {
  const { data } = useApiGetResultsData(season);

  let fData = data;
  if (!fData) fData = formatSeasonData(undefined);
  const { year, first, second, third } = fData;

  return (
    <ScoreHero season={year} first={first} second={second} third={third} />
  );
};

export default ScoreHeroView;
