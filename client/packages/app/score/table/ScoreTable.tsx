import React, { Fragment } from 'react';
import { useRecoilValue } from 'recoil';
import { resultsFilter } from 'app/score/state/scoreState';
import tcx from 'common/tailwindcss-classnames';
import cx from 'classnames';
import { Table, TBody, Tr } from 'common/table';
import TableHeader from './TableHeader';
import TableCell from './TableCell';
import PilotTableCell from './PilotTableCell';
import FlightCellView from './FlightCellView';
import styles from './ScoreTable.module.css';

type TableProps = {
  data: FSeasonData[] | undefined;
  bottom?: React.ReactNode;
};

const ScoreTable = ({ data = [], bottom }: TableProps) => {
  const filter = useRecoilValue(resultsFilter);
  const isFilter = !!filter;

  return (
    <Table className={styles.table}>
      <TableHeader />
      <TBody className="bg-white">
        {data.map((group, gIndex) => (
          <Fragment key={gIndex}>
            {group.results.map((pilot, pilotIndex) => {
              const rank = isFilter ? pilot.rank : pilotIndex + 1;
              const classesScore = tcx('text-center', {
                'text-gray-900': rank < 4,
              });

              return (
                <Tr
                  key={`${pilot.pilotId}-${rank}`}
                  className="border-b-8 border-white"
                >
                  <PilotTableCell
                    id={pilot.pilotId}
                    name={pilot.name}
                    rank={rank}
                  />

                  <TableCell className={classesScore}>
                    {pilot.score.toFixed(1)}
                  </TableCell>

                  <TableCell className={classesScore}>
                    {pilot.totalDist.toFixed(1)}km
                  </TableCell>

                  {[0, 1, 2].map((item, flightIndex) => {
                    const flight = pilot.flights[item];
                    const key = flight
                      ? flight.id
                      : `${pilotIndex}-${flightIndex};`;
                    return (
                      <TableCell
                        key={key}
                        className={cx(classesScore, {
                          'hover:bg-primary': !!flight,
                          'hover:text-white': !!flight,
                        })}
                      >
                        <FlightCellView flight={flight} />
                      </TableCell>
                    );
                  })}
                </Tr>
              );
            })}
          </Fragment>
        ))}
        {bottom}
      </TBody>
    </Table>
  );
};

export default ScoreTable;
