import React from 'react';

type Props = {
  children: React.ReactNode;
} & React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLTableRowElement>,
  HTMLTableRowElement
>;

const Tr = ({ children, ...rest }: Props) => {
  return <tr {...rest}>{children}</tr>;
};

export default Tr;
