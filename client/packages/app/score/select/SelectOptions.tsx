import React from 'react';
import { useApiGetSeasons } from 'app/score/state/service';
import { getSeasonYear } from 'app/score/state/utils';
import Options from './Options';

const SelectOptions = () => {
  let { data: seasons } = useApiGetSeasons();
  let options = (seasons || []).map((option) => {
    return {
      key: option.season,
      value: getSeasonYear(option.season),
    };
  });

  return <Options options={options} />;
};

export default SelectOptions;
