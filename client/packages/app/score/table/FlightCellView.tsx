import React from 'react';
import { getType } from 'app/score/state/utils';

type FlightTableCellProps = {
  flight: Flight | undefined;
};

const FlightCellView = ({ flight }: FlightTableCellProps) => {
  return (
    <>
      {flight ? (
        <a
          href={`http://xcglobe.com/flights#show-flight/${flight.id}/`}
          target="_blank"
          rel="noopener noreferrer nofollow"
          className="cursor-pointer"
        >
          <div className="flex flex-col">
            <span>{flight.pts.toFixed(1)} pt.</span>
            <span>
              {flight.dist.toFixed(1)} km / {getType(flight.type)}
            </span>
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
