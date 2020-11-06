import React from 'react';
import { getType } from 'app/score/state/utils';
import FaiTriangle from '../types/fai-triangle.svg';
import Triangle from '../types/triangle.svg';
import FreeFlight from '../types/free.svg';

type FlightTableCellProps = {
  flight: Flight | undefined;
};

const FlightCellView = ({ flight }: FlightTableCellProps) => {
  const type = getType(flight?.type || 4);
  return (
    <>
      {flight ? (
        <a
          href={`http://xcglobe.com/flights#show-flight/${flight.id}/`}
          target="_blank"
          rel="noopener noreferrer nofollow"
          className="cursor-pointer"
        >
          <div className="flex flex-row justify-between">
            <div className="flex flex-col">
              <span>{flight.pts.toFixed(1)} pt.</span>
              <span>{flight.dist.toFixed(1)} km</span>
            </div>
            <div className="px-2">
              {/*  @ts-ignore */}
              {type === 'PP' && <FreeFlight width="32px" />}
              {/*  @ts-ignore */}
              {type === 'FAI-T' && <FaiTriangle width="32px" />}
              {/*  @ts-ignore */}
              {type === 'T' && <Triangle width="32px" />}
            </div>
          </div>
        </a>
      ) : (
        <div className="flex flex-col">
          <span> / </span>
        </div>
      )}
    </>
  );
};

export default FlightCellView;
