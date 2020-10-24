import React from 'react';
import tcx from 'common/tailwindcss-classnames';

import { Table, THead, Th, Td, TBody, Tr } from 'common/table';

type TableProps = {
  data: Result[];
};

const ScoreTable = ({ data = [] }: TableProps) => {
  return (
    <Table className="w-full min-w-full border-collapse table-striped relative">
      <THead className="text-sm font-light uppercase text-white bg-primary1 whitespace-no-wrap">
        <tr>
          <Th className="font-normal text-left px-6 py-4 sticky top-0">
            Mesto
          </Th>
          <Th className="font-normal text-left px-6 py-4 sticky top-0">
            Pilot
          </Th>
          <Th className="font-normal text-center px-6 py-4 sticky top-0">
            Točke
          </Th>
        </tr>
      </THead>
      <TBody className="bg-white divide-y-8 divide-white whitespace-no-wrap">
        {data.map((pilot, i) => {
          const classesCell = tcx(
            'px-6',
            'py-4',
            'bg-gray-50',
            'leading-4',
            'font-medium',
            'text-gray-500',
            'uppercase',
            'tracking-wider',
            'text-sm'
          );
          const classesRank = tcx(classesCell, 'text-left', {
            'text-gray-900': i < 3,
          });
          const classesPilot = tcx(classesCell, 'text-left', {
            'text-gray-900': i < 3,
          });
          const classesScore = tcx(classesCell, 'text-center', {
            'text-gray-900': i < 3,
          });

          return (
            <Tr key={`${pilot.pilot}-${i}`}>
              <Td className={classesRank}>{`${i + 1}.`}</Td>
              <Td className={classesPilot}>{pilot.name}</Td>
              <Td className={classesScore}>{pilot.score.toFixed(1)}</Td>
            </Tr>
          );
        })}
      </TBody>
    </Table>
  );
};

export default ScoreTable;
