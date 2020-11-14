import React, { useRef } from 'react';
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

  // preserve data until new arrives
  let lastData = useRef<FSeasonData>();
  if (data && data[0]) {
    lastData.current = data[0];
  }

  if (!lastData.current) {
    lastData.current = formatSeasonData(undefined);
  }

  const { year, first, second, third } = lastData.current;

  return (
    <ScoreHero season={year} first={first} second={second} third={third} />
  );
};

export default ScoreHeroView;
