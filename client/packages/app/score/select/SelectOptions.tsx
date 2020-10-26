import React from 'react';
import { Listbox } from '@headlessui/react';
import { useApiGetSeasons } from 'app/score/state/service';
import { getSeasonYear } from 'app/score/state/utils';

type SelectOptionsProps = {};

const SelectOptions = (props: SelectOptionsProps) => {
  let { data: seasons } = useApiGetSeasons();
  let options = seasons || [];

  return (
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
                className={`${selected ? 'text-white' : ''} block truncate`}
              >
                {getSeasonYear(option.season)}
              </span>
            </div>
          )}
        </Listbox.Option>
      ))}
    </Listbox.Options>
  );
};

export default SelectOptions;
