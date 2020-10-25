import React from 'react';
import XcDpLogo from 'app/logos/XcDpLogo';
import Lines from 'assets/lines-score.svg';
import styles from './ScoreHero.module.css';

type Props = {
  season: React.ReactNode;
  first: React.ReactNode;
  second: React.ReactNode;
  third: React.ReactNode;
};

const ScoreHero = ({ season, first, second, third }: Props) => {
  return (
    <div className="flex justify-center items-center bg-gray-50">
      <div className="flex-1 flex max-w-5xl justify-between items-center pb-5 sm:pb-8">
        <div className="flex flex-1 relative prose prose-sm sm:prose-lg lg:prose-2xl xl:prose-2xl">
          <div className="relative flex flex-1 z-10">
            {/* @ts-ignore */}
            <Lines width="100%" />
            <h3 className={styles.first}>1. {first}</h3>
            <h3 className={styles.second}>2. {second}</h3>
            <h3 className={styles.third}>3. {third}</h3>
          </div>
          <div className="relative flex flex-1 flex-col justify-center">
            <h1 className={styles.title}>{season}</h1>
          </div>
        </div>

        <div className="flex flex-col self-end px-5 flex-1">
          <XcDpLogo width="100%" />
        </div>
      </div>
    </div>
  );
};

export default ScoreHero;
