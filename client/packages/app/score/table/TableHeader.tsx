import React from 'react';
import { THead, Th } from 'common/table';
import tcx from 'common/tailwindcss-classnames';

type TableHeaderProps = {};

const TableHeader = (props: TableHeaderProps) => {
  const thBase = tcx('font-normal', 'px-2', 'sm:px-4', 'py-4');
  const thClasses = tcx(thBase, 'text-center');
  const pilotClasses = tcx(
    thBase,
    'text-left',
    'bg-primary1',
    'sticky',
    'left-0'
  );
  return (
    <THead className="text-xs sm:text-sm font-light uppercase text-white bg-primary1 whitespace-nowrap">
      <tr>
        <Th className={pilotClasses}>Pilot</Th>
        <Th className={thClasses}>Točke</Th>
        <Th className={thClasses}>Σ km</Th>
        <Th className={thClasses}>1.</Th>
        <Th className={thClasses}>2.</Th>
        <Th className={thClasses}>3.</Th>
      </tr>
    </THead>
  );
};

export default TableHeader;
