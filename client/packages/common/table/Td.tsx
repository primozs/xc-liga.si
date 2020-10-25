import React from 'react';

type Props = {
  children: React.ReactNode;
  className?: string;
} & React.DetailedHTMLProps<
  React.TdHTMLAttributes<HTMLTableDataCellElement>,
  HTMLTableDataCellElement
>;

const TableCell = ({ children, className, ...rest }: Props) => {
  return (
    <td className={className} {...rest}>
      {children}
    </td>
  );
};

export default TableCell;
