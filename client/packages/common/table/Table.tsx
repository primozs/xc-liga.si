import React from 'react';

type Props = {
  children: React.ReactNode;
} & React.DetailedHTMLProps<
  React.TableHTMLAttributes<HTMLTableElement>,
  HTMLTableElement
>;

const Table = ({ children, ...rest }: Props) => {
  return (
    <table className="" {...rest}>
      {children}
    </table>
  );
};

export default Table;
