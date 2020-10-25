export const getType = (type?: number) => {
  switch (type) {
    case 1:
      return 'PP';
    case 2:
      return 'T';
    case 3:
      return 'FAI-T';
    default:
      return '';
  }
};

export const getSeasonYear = (season: string = '') => {
  return season.split('-')[1] || '';
};

export const getDuration = (season?: string) => {
  if (!season) return '';
  const years = season.split('-');
  return `1.10.${years[0]} - 30.9.${years[1]}`;
};

export const getCurrentSeason = (date?: Date) => {
  const dateTime = date ? date.getTime() : new Date();
  const year = new Date().getFullYear();
  const seasonEnd = new Date(`${year}-09-30T23:59:59Z`).getTime();
  if (dateTime < seasonEnd) {
    return `${year - 1}-${year}`;
  } else {
    return `${year}-${year + 1}`;
  }
};
