import { useCallback } from 'react';

const useWindowNav = (path: string = '/') => {
  const windowNav = useCallback(() => {
    if (typeof window !== 'undefined') {
      // @ts-ignore
      window.location = path;
    }
  }, [path]);
  return { windowNav };
};

export default useWindowNav;
