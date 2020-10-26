import React from 'react';
import tcx from 'common/tailwindcss-classnames';
import TableCell from './TableCell';

type Props = {
  rank: number;
  name: string;
  id: number;
};

const PilotTableCell = ({ rank, name, id }: Props) => {
  const classesPilot = tcx(
    'sticky',
    'left-0',
    'text-left',
    'uppercase',
    'hover:bg-primary',
    'hover:text-white',
    {
      'text-gray-900': rank < 4,
    }
  );

  return (
    <TableCell className={classesPilot}>
      <a
        href={`http://xcglobe.com/pilots#pilot/${id}/`}
        target="_blank"
        rel="noopener noreferrer nofollow"
        className="cursor-pointer"
      >
        {`${rank}. ${name}`}
      </a>
    </TableCell>
  );
};

export default PilotTableCell;
