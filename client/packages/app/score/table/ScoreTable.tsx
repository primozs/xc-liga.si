import React from 'react';
import tcx from 'common/tailwindcss-classnames';

import { Table, THead, Th, Td, TBody, Tr } from 'common/table';

type TableProps = {
  data: Result[];
};

const ScoreTable = ({ data = [] }: TableProps) => {
  return (
    <Table className="w-full min-w-full border-collapse table-striped relative">
      <THead className="text-xs sm:text-sm font-light uppercase text-white bg-primary1 whitespace-no-wrap">
        <tr>
          <Th className="font-normal text-center sm:text-left px-2 sm:px-6 py-4 sticky top-0">
            #
          </Th>
          <Th className="font-normal text-left px-2 sm:px-6 py-4 sticky top-0">
            Pilot
          </Th>
          <Th className="font-normal text-center px-2 sm:px-6 py-4 sticky top-0">
            Točke
          </Th>
          <Th className="font-normal text-center px-2 sm:px-6 py-4 sticky top-0">
            Sku. razd.
          </Th>
        </tr>
      </THead>
      {/* whitespace-no-wrap */}
      <TBody className="bg-white">
        {data.map((pilot) => {
          const classesCell = tcx(
            'px-2',
            'py-2',
            'sm:px-6',
            'sm:py-4',
            'bg-gray-50',
            'leading-4',
            'font-medium',
            'text-gray-500',
            'tracking-wider',
            'text-xs',
            'sm:text-sm'
          );
          const classesRank = tcx(classesCell, 'text-center', 'sm:text-left', {
            'text-gray-900': pilot.rank < 4,
          });
          const classesPilot = tcx(classesCell, 'text-left', 'uppercase', {
            'text-gray-900': pilot.rank < 4,
          });
          const classesScore = tcx(classesCell, 'text-center', {
            'text-gray-900': pilot.rank < 4,
          });

          return (
            <Tr
              key={`${pilot.pilot}-${pilot.rank}`}
              className="border-b-8 border-white"
            >
              <Td className={classesRank}>{`${pilot.rank}.`}</Td>
              <Td className={classesPilot}>{pilot.name}</Td>
              <Td className={classesScore}>{pilot.score.toFixed(1)}</Td>
              <Td className={classesScore}>{pilot.totalDist.toFixed(1)}km</Td>
            </Tr>
          );
        })}
      </TBody>
    </Table>
  );
};

export default ScoreTable;
