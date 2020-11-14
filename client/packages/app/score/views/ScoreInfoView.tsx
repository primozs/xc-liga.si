import React, { useRef } from 'react';
import StatsItem from 'common/stats/StatsItem';
import Search from 'app/score/search/Search';
import {
  useApiGetResultsData,
  formatSeasonData,
} from 'app/score/state/service';
import SelectSeason from 'app/score/select/SelectSeason';
import SelectCategory from 'app/score/select/SelectCategory';
import GenderInfo from '../select/GenderInfo';

type Props = {
  season?: string;
};

const ScoreInfoView = ({ season }: Props) => {
  const { data } = useApiGetResultsData(season);

  // preserve data until new arrives
  let lastData = useRef<FSeasonData>();
  if (data && data[0]) {
    lastData.current = data[0];
  }

  if (!lastData.current) {
    lastData.current = formatSeasonData(undefined);
  }

  const {
    totalNoFlights,
    totalSeasonDist,
    duration,
    updated,
    gliders,
    noPilots,
    total,
  } = lastData.current;

  return (
    <div className="flex-grow-0 flex-auto flex-row sm:flex-col">
      <Search className="mb-4" />
      <SelectSeason />
      <div className="flex flex-col">
        <StatsItem label="Število pilotov" value={noPilots} />
        <StatsItem label="Št. Letov" value={totalNoFlights} />
        <StatsItem label="Razdalja" value={totalSeasonDist} />
        <StatsItem label="Trajanje" value={duration} />
        <StatsItem label="Zadnjič osveženo" value={updated} className="mb-4" />
      </div>
      <div className="flex flex-col">
        <SelectCategory />
        <StatsItem label="Število pilotov" value={total} />
        <GenderInfo />
        <StatsItem label="Padala" value={gliders} />
      </div>
    </div>
  );
};

export default ScoreInfoView;
