import React, { useCallback } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { useRouter } from 'next/router';
import { useRecoilState } from 'recoil';
import Box from 'common/Box';
import tcx from 'common/tailwindcss-classnames';
import cx from 'classnames';
import styles from './SelectSeason.module.css';
import { selectedSeason } from 'app/score/state/scoreState';
import { useApiGetSeasons } from 'app/score/state/service';
import { getSeasonYear } from 'app/score/state/utils';

function SelectSeason() {
  const router = useRouter();
  let [selected, setSelected] = useRecoilState(selectedSeason);
  let { data: seasons } = useApiGetSeasons();
  let options = seasons || [];

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
                <Listbox.Options
                  static
                  className="max-h-60 py-1 text-base font-bold leading-6 shadow-xs overflow-auto focus:outline-none"
                >
                  {options.map((option) => (
                    <Listbox.Option
                      key={option.season}
                      value={option.season}
                      className="focus:outline-none"
                    >
                      {({ selected, active }) => (
                        <div
                          className={`${
                            active ? 'text-white bg-primary1' : 'text-primary2'
                          } text-2xl cursor-default select-none relative, text-center
                          py-2 px-4 focus:outline-none border-b border-primary1`}
                        >
                          <span
                            className={`${
                              selected ? 'text-white' : ''
                            } block truncate`}
                          >
                            {getSeasonYear(option.season)}
                          </span>
                        </div>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Transition>
            </div>
          </>
        )}
      </Listbox>
    </Box>
  );
}

export default SelectSeason;
