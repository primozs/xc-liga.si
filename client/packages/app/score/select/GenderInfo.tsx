import React from 'react';
import { useRecoilValue } from 'recoil';
import { selectedCategory } from 'app/score/state/scoreState';
import { getGenderFromCategory } from 'app/score/state/service';
import StatsItem from 'common/stats/StatsItem';

const GenderInfo = () => {
  const category = useRecoilValue(selectedCategory);
  const gender = getGenderFromCategory(category);

  return <StatsItem label="Spol" value={gender} className="mb-4" />;
};

export default GenderInfo;
