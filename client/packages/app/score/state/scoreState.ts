import { atom } from 'recoil';

export const selectedSeason = atom({
  key: 'selectedSeason',
  default: '',
});

export const resultsFilter = atom({
  key: 'resultsFilter',
  default: '',
});

export const DEFAULT_CATEGORY = 'Overall';

export const selectedCategory = atom({
  key: 'selectedCategory',
  default: DEFAULT_CATEGORY,
});
