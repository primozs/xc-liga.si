import React from 'react';
import XcDpLogo from 'app/logos/XcDpLogo';
import Lines from 'assets/lines-score.svg';
import styles from './ScoreHero.module.css';
import cx from 'classnames';

type Props = {
  season: React.ReactNode;
  first: React.ReactNode;
  second: React.ReactNode;
  third: React.ReactNode;
};

const LinesSVG = (Lines as unknown) as React.SVGProps<SVGSVGElement>;

const ScoreHero = ({ season, first, second, third }: Props) => {
  return (
    <>
      <div className="flex justify-center items-center bg-gray-50">
        <div className="container mx-auto p-4">
          <div className={cx('relative p-4 sm:pb-8', styles.heroContent)}>
            {/* @ts-ignore */}
            <LinesSVG className={styles.lines} />

            <h3 className={styles.first}>1. {first}</h3>
            <h3 className={styles.second}>2. {second}</h3>
            <h3 className={styles.third}>3. {third}</h3>

            <h1 className={styles.title}>{season}</h1>

            <XcDpLogo className={styles.logo} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ScoreHero;
