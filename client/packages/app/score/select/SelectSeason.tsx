import React, { useCallback } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import { useRecoilState } from 'recoil';
import Box from 'common/Box';
import tcx from 'common/tailwindcss-classnames';
import cx from 'classnames';
import styles from './SelectSeason.module.css';
import { selectedSeason } from 'app/score/state/scoreState';
import { getSeasonYear } from 'app/score/state/utils';

const SelectOptions = dynamic(() => import('./SelectOptions'), {
  ssr: false,
  loading: () => (
    <Listbox.Options
      static
      className="max-h-60 py-1 text-base font-bold leading-6 shadow-xs overflow-auto focus:outline-none text-white"
    >
      Loading
    </Listbox.Options>
  ),
});

function SelectSeason() {
  const router = useRouter();
  let [selected, setSelected] = useRecoilState(selectedSeason);

  const handleSelect = useCallback(
    (val: string) => {
      router.push(`/season/${val}`);
      setSelected(val);
    },
    [setSelected, router]
  );

  const boxHeader = tcx('relative', 'bg-primary1', 'font-normal', 'uppercase');
  const classessBox = cx(boxHeader, styles.headerBox);

  const classessLabel = cx(
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
    'flex',
    'flex-1',
    'justify-end',
    'leading-tight',
    'bg-transparent',
    'appearance-none',
    'border-0',
    'text-white',
    'focus:outline-none'
  );
  const inputClasses = cx(input, styles.input);

  return (
    <Box direction="row" align="center" className={classessBox}>
      <Listbox value={selected} onChange={handleSelect}>
        {({ open }) => (
          <>
            <Listbox.Label className={classessLabel}>SEZ.</Listbox.Label>
            <div className="relative flex flex-1">
              <Listbox.Button className={inputClasses}>
                <span className="">{getSeasonYear(selected)}</span>
                <span className="inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                  <svg
                    className="h-5 w-5 text-white"
                    viewBox="0 0 20 20"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path
                      d="M7 7l3-3 3 3m0 6l-3 3-3-3"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </Listbox.Button>

              <Transition
                show={open}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
                className="absolute mt-1 w-full bg-primary border-primary1 border shadow-lg z-10"
              >
                {open && <SelectOptions />}
              </Transition>
            </div>
          </>
        )}
      </Listbox>
    </Box>
  );
}

export default SelectSeason;
