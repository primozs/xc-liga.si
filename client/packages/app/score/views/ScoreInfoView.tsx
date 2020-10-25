import React from 'react';
import StatsItem from 'common/stats/StatsItem';
import Search from 'app/score/search/Search';
import {
  useApiGetResultsData,
  formatSeasonData,
} from 'app/score/state/service';
import SelectSeason from 'app/score/select/SelectSeason';

type Props = {
  season?: string;
};

const ScoreInfoView = ({ season }: Props) => {
  const { data } = useApiGetResultsData(season);
  let fData = data;
  if (!fData) fData = formatSeasonData(undefined);
  const {
    totalNoFlights,
    totalSeasonDist,
    duration,
    updated,
    gliders,
    noPilots,
    sex,
  } = fData;

  return (
    <div className="flex-grow-0 flex-auto flex-row sm:flex-col">
      <SelectSeason />
      <div className="flex flex-col">
        <StatsItem label="Št. Letov" value={totalNoFlights} />
        <StatsItem label="Razdalja" value={totalSeasonDist} />
        <StatsItem label="Trajanje" value={duration} />
        <StatsItem label="Zadnjič osveženo" value={updated} className="mb-4" />
      </div>
      <div className="flex flex-col">
        <StatsItem label="KAT." value="Overall" type="header" />
        <StatsItem label="Padala" value={gliders} />
        <StatsItem label="Število pilotov" value={noPilots} />
        <StatsItem label="Spol" value={sex} className="mb-4" />
      </div>
      <Search />
    </div>
  );
};

export default ScoreInfoView;
