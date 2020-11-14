import React from 'react';
import Options from './Options';
import { categoryOptions } from 'app/score/state/service';

const CategoryOptions = () => {
  return <Options options={categoryOptions} />;
};

export default CategoryOptions;
