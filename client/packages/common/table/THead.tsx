import React from 'react';

type Props = {
  children: React.ReactNode;
} & React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLTableSectionElement>,
  HTMLTableSectionElement
>;

const THead = ({ children, ...rest }: Props) => {
  return (
    <thead className="" {...rest}>
      {children}
    </thead>
  );
};

export default THead;
