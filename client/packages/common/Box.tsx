import React from 'react';
import cx from 'classnames';

type Props = {
  children: React.ReactNode;
  className?: string;
  align?: 'start' | 'end' | 'center' | 'baseline' | 'stretch';
  justify?: 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly';
  direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
  pad?: 'small' | 'medium' | 'large';
} & React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

const Box = ({
  className,
  align,
  justify,
  direction = 'column',
  children,
  pad,
  ...rest
}: Props) => {
  const classes = cx(
    'flex',
    {
      'p-3 sm:p-4': pad === 'small',
      'p-5 sm:p-6': pad === 'medium',
      'p-7 sm:p-8': pad === 'large',
      'flex-row': direction === 'row',
      'flex-col': direction === 'column',
      'flex-row-reverse': direction === 'row-reverse',
      'flex-col-reverse': direction === 'column-reverse',
      [`items-${align}`]: align !== undefined,
      [`justify-${justify}`]: justify !== undefined
    },
    className
  );

  return (
    <div className={classes} {...rest}>
      {children}
    </div>
  );
};

export default Box;
