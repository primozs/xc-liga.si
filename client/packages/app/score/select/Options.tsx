import React from 'react';
import { Listbox } from '@headlessui/react';

type Props = {
  options?: { key: string; value: string }[];
};

const Options = ({ options = [] }: Props) => {
  return (
    <Listbox.Options
      static
      className="max-h-60 py-1 text-base font-bold leading-6 shadow-xs overflow-auto focus:outline-none"
    >
      {options.map((option) => (
        <Listbox.Option
          key={option.key}
          value={option.key}
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
                {option.value}
              </span>
            </div>
          )}
        </Listbox.Option>
      ))}
    </Listbox.Options>
  );
};

export default Options;
