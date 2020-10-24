import React from 'react';
import Lines from 'assets/lines-gray.svg';
import styles from './RulesLogo.module.css';

const RulesLogo = () => {
  return (
    <div className="flex flex-1 relative prose prose-sm sm:prose-lg lg:prose-2xl xl:prose-2xl">
      <div className="relative flex flex-1 z-10">
        {/* @ts-ignore */}
        <Lines width="100%" />
      </div>
      <div className="relative flex flex-1 flex-col justify-center">
        <h1 className={styles.title}>PRAVILA</h1>
      </div>
    </div>
  );
};

export default RulesLogo;
