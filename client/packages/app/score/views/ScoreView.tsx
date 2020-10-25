import React from 'react';
import { useRecoilValue } from 'recoil';
import ScoreTable from 'app/score/table/ScoreTable';
import Box from 'common/Box';
import {
  useApiGetResultsData,
  formatSeasonData,
} from 'app/score/state/service';
import { resultsFilter } from 'app/score/state/scoreState';
import Spinner from 'common/Spinner';

type Props = {
  season?: string;
};

const ScoreView = ({ season }: Props) => {
  const { data, status } = useApiGetResultsData(season);
  const filter = useRecoilValue(resultsFilter);

  let fData = data;
  if (!fData) fData = formatSeasonData(undefined);
  const { results } = fData;

  let filteredResults = results;
  if (filter) {
    filteredResults = filteredResults.filter((item) => {
      return item.name.toLowerCase().includes(filter.toLowerCase());
    });
  }

  return (
    <Box className="flex-grow">
      {status === 'loading' && <Spinner />}
      <ScoreTable data={filteredResults} />
    </Box>
  );
};

export default ScoreView;
