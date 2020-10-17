import React from 'react';
import useWindowNav from '../common/util/useWindowNav';

export default () => {
  const { windowNav } = useWindowNav('/');
  return (
    <div>
      <h1>Stran ne obstaja.</h1>

      <button onClick={windowNav}>Domov</button>
    </div>
  );
};
