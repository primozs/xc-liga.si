import React from 'react';
import cx from 'classnames';
import tcx from 'common/tailwindcss-classnames';

type Props = {
  children: React.ReactNode;
  className?: string;
} & React.DetailedHTMLProps<
  React.TdHTMLAttributes<HTMLTableDataCellElement>,
  HTMLTableDataCellElement
>;

const TableCell = ({ children, className, ...rest }: Props) => {
  const tClasses = tcx('px-4', 'py-3');
  const classes = cx(tClasses, className);
  return (
    <td className={classes} {...rest}>
      {children}
    </td>
  );
};

export default TableCell;
