import React, { useRef } from 'react';
import { useRecoilValue } from 'recoil';
import ScoreTable from 'app/score/table/ScoreTable';
import { useApiGetResultsData } from 'app/score/state/service';
import { resultsFilter } from 'app/score/state/scoreState';
import { useIntersectionObserver } from 'common/hooks/useIntersectionObserver';
import Spinner from 'common/Spinner';
import { Tr, Td } from 'common/table';

type Props = {
  season?: string;
};

const ScoreView = ({ season }: Props) => {
  const filter = useRecoilValue(resultsFilter);
  const {
    data,
    status,
    fetchMore,
    canFetchMore,
    isFetchingMore,
  } = useApiGetResultsData(season, { search: filter });

  const loadMoreRef = useRef<HTMLSpanElement | null>(null);

  useIntersectionObserver({
    target: loadMoreRef,
    onIntersect: fetchMore,
    enabled: canFetchMore,
  });

  // preserve data until new arrives
  let lastData = useRef<FSeasonData[]>([]);
  if (data) {
    lastData.current = data;
  }

  return (
    <>
      {status === 'loading' && <Spinner />}
      {isFetchingMore && <Spinner />}
      <ScoreTable
        data={lastData.current}
        bottom={
          <Tr>
            <Td>
              <span ref={loadMoreRef}></span>
            </Td>
          </Tr>
        }
      />
    </>
  );
};

export default ScoreView;
