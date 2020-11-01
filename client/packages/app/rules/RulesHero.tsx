import React from 'react';
import XcDpLogo from 'app/logos/XcDpLogo';
import Lines from 'assets/lines-gray.svg';
import styles from './RulesHero.module.css';
import cx from 'classnames';

const RulesHero = () => {
  return (
    <div className="flex justify-center items-center bg-gray-50">
      <div className="container mx-auto p-4">
        <div className={cx('relative p-4 sm:pb-8', styles.heroContent)}>
          {/* @ts-ignore */}
          <Lines className={styles.lines} />
          <h1 className={styles.title}>PRAVILA</h1>
          <XcDpLogo className={styles.logo} />
        </div>
      </div>
    </div>
  );
};

export default RulesHero;
