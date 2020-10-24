import React from 'react';

type Props = {
  children: React.ReactNode;
} & React.DetailedHTMLProps<
  React.ThHTMLAttributes<HTMLTableHeaderCellElement>,
  HTMLTableHeaderCellElement
>;

const Th = ({ children, ...rest }: Props) => {
  return <th {...rest}>{children}</th>;
};

export default Th;
