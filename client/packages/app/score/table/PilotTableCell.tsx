import React from 'react';
import tcx from 'common/tailwindcss-classnames';
import cx from 'classnames';
import TableCell from './TableCell';
import styles from './PilotTableCell.module.css';

type Props = {
  rank: number;
  name: string;
  id: number;
};

const PilotTableCell = ({ rank, name, id }: Props) => {
  const td = tcx(
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

  const classesPilot = cx(td, styles.td);

  return (
    <TableCell className={classesPilot}>
      <a
        href={`http://xcglobe.com/pilots#pilot/${id}/`}
        target="_blank"
        rel="noopener noreferrer nofollow"
        className={cx('cursor-pointer', styles.link)}
      >
        {`${rank}. ${name}`}
      </a>
    </TableCell>
  );
};

export default PilotTableCell;
