import React, { useState, useCallback, useEffect } from 'react';
import { useDebounce } from 'common/hooks/useDebounce';
import { useSetRecoilState } from 'recoil';
import Box from 'common/Box';
import tcx from 'common/tailwindcss-classnames';
import cx from 'classnames';
import { resultsFilter } from 'app/score/state/scoreState';
import styles from './Search.module.css';

type Props = {
  label?: React.ReactNode;
  className?: string;
};

const useHandleFilterChange = () => {
  const setFilter = useSetRecoilState(resultsFilter);

  const [value, setValue] = useState('');
  const filter = useDebounce(value, 300);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }, []);

  useEffect(() => {
    setFilter(filter);
  }, [setFilter, filter]);

  return handleChange;
};

const Search = ({ className, label, ...rest }: Props) => {
  const handleChange = useHandleFilterChange();
  const boxHeader = tcx(
    'relative',
    'justify-end',
    'bg-primary1',
    'font-normal'
  );
  const classesLabel = cx(
    tcx(
      'text-primary',
      'uppercase',
      'mr-2',
      'text-5xl',
      'font-bold',
      'leading-normal'
    ),
    styles.headerLabel
  );
  const input = tcx(
    'leading-tight',
    'bg-transparent',
    'appearance-none',
    'border-0',
    'px-4',
    'text-white',
    'focus:outline-none',
    'placeholder-primary'
  );
  const inputClasses = cx(input, styles.input);

  const classessBox = cx(boxHeader, styles.headerBox, className);

  return (
    <Box direction="row" align="center" className={classessBox} {...rest}>
      <span className="z-10">
        <input
          onChange={handleChange}
          className={inputClasses}
          id="search"
          type="text"
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="off"
          placeholder="Pilot"
        />
      </span>
      <span className={classesLabel}>
        <label htmlFor="search">Išči</label>
      </span>
    </Box>
  );
};

export default Search;
