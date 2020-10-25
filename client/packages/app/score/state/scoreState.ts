import { atom } from 'recoil';

export const selectedSeason = atom({
  key: 'selectedSeason',
  default: '',
});

export const resultsFilter = atom({
  key: 'resultsFilter',
  default: '',
});
