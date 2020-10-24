import React from 'react';
import ScoreHero from 'app/hero/ScoreHero';
import ScoreTable from 'app/score/ScoreTable';
import StatsItem from 'app/stats/StatsItem';
import Box from 'common/Box';
import data from 'app/score/lzs2019.json';

export default function Home() {
  const nData = (data as Result[]) || [];
  const season = '2020';
  const seasons = ['2020', '2021'];
  const first = nData[0] ? nData[0].name : '1. mesto';
  const second = nData[1] ? nData[1].name : '2. mesto';
  const third = nData[2] ? nData[2].name : '3. mesto';
  const noPilots = data?.length ?? 0;
  const noFlights = data?.length * 3 ?? 0;
  const sex = 'M/Ž';
  const gliders = 'EN-A, EN-B, EN-C, EN-D, CCC';
  const duration = '1. 1.–31. 12. 2020';
  const updated = '31. 10. 2020';

  return (
    <>
      <ScoreHero season={season} first={first} second={second} third={third} />
      <div className="container mx-auto py-8 px-4">
        <Box className="flex-1 space-x-0 sm:space-x-4 flex-col sm:flex-row">
          <div className="flex-grow-0 flex-auto flex-row sm:flex-col">
            <div className="flex flex-col">
              <StatsItem label="SEZ." value={season} type="header" />
              <StatsItem label="Št. Letov" value={noFlights} />
              <StatsItem label="Trajanje" value={duration} />
              <StatsItem
                label="Zadnjič osveženo"
                value={updated}
                className="mb-4"
              />
            </div>
            <div className="flex flex-col">
              <StatsItem label="KAT." value="Overall" type="header" />
              <StatsItem label="Padala" value={gliders} />
              <StatsItem label="Število pilotov" value={noPilots} />
              <StatsItem label="Spol" value={sex} />
            </div>
          </div>
          <Box className="flex-grow">
            <ScoreTable data={nData} />
          </Box>
        </Box>
      </div>
    </>
  );
}
