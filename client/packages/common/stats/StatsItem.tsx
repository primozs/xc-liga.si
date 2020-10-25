import React from 'react';
import Box from 'common/Box';
import tcx from 'common/tailwindcss-classnames';
import cx from 'classnames';
import styles from './StatsItem.module.css';

type Props = {
  label: React.ReactNode;
  value: React.ReactNode;
  type?: 'normal' | 'header';
  className?: string;
};

const StatsItem = ({
  type = 'normal',
  className,
  label,
  value,
  ...rest
}: Props) => {
  const boxNormal = tcx(
    'justify-between',
    'px-6',
    'sm:px-3',
    'py-4',
    'bg-gray-50',
    'mb-2',
    'text-xs',
    'font-normal'
  );
  const labelNormal = tcx('text-gray-500', 'uppercase', 'mr-2');

  const boxHeader = tcx(
    'justify-end',
    'relative',
    'px-6',
    'sm:px-3',
    'py-3',
    'bg-primary1',
    'font-normal',
    'text-white',
    'uppercase'
  );
  const labelHeader = cx(
    tcx('text-primary', 'mr-2', 'text-5xl', 'font-bold', 'leading-normal'),
    styles.headerLabel
  );

  const classessBox = cx(
    {
      [boxNormal]: type === 'normal',
      [boxHeader]: type === 'header',
      [styles.headerBox]: type === 'header',
    },
    className
  );

  const classessLabel = cx({
    [labelNormal]: type === 'normal',
    [labelHeader]: type === 'header',
  });

  return (
    <Box direction="row" align="center" className={classessBox} {...rest}>
      <span className={classessLabel}>{label}</span>
      <span
      // className="bg-primary1"
      >
        {value}
      </span>
    </Box>
  );
};

export default StatsItem;
