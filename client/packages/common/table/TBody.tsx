import React from 'react';

type Props = {
  children: React.ReactNode;
} & React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLTableSectionElement>,
  HTMLTableSectionElement
>;

const TBody = ({ children, ...rest }: Props) => {
  return <tbody {...rest}>{children}</tbody>;
};

export default TBody;
