import React from 'react';
import XcDpLogo from 'app/logos/XcDpLogo';
import RulesLogo from 'app/logos/RulesLogo';

const RulesHero = () => {
  return (
    <div className="flex justify-center items-center bg-gray-50">
      <div className="flex-1 flex max-w-5xl justify-between items-center pb-5 sm:pb-8">
        <RulesLogo />
        <div className="flex flex-col self-end px-5 flex-1">
          <XcDpLogo width="100%" />
        </div>
      </div>
    </div>
  );
};

export default RulesHero;
