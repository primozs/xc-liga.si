import React from 'react';
import { Td } from 'common/table';
import tcx from 'common/tailwindcss-classnames';
import cx from 'classnames';

type TrProps = PropsType<typeof Td>;

type TableCellProps = {
  children: React.ReactNode;
  className?: string;
} & TrProps;

const TableCell = ({ children, className, ...rest }: TableCellProps) => {
  const base = tcx(
    'px-2',
    'py-2',
    'sm:px-4',
    'sm:py-4',
    'bg-gray-50',
    'leading-4',
    'font-medium',
    'text-gray-500',
    'tracking-wider',
    'text-xs',
    'sm:text-sm'
  );
  const classes = cx(base, className);

  return (
    <Td className={classes} {...rest}>
      {children}
    </Td>
  );
};

export default TableCell;
