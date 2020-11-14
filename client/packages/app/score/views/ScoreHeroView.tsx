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

  let fData: FSeasonData;
  if (!data) {
    fData = formatSeasonData(undefined);
  } else {
    fData = data[0];
  }

  const { year, first, second, third } = fData;

  return (
    <ScoreHero season={year} first={first} second={second} third={third} />
  );
};

export default ScoreHeroView;
