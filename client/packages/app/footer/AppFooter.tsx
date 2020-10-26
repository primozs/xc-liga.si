import React from 'react';
import Box from 'common/Box';
import LzsWLogo from 'app/logos/LzsWLogo';

function AppFooter() {
  return (
    <>
      <div className="flex justify-center items-center bg-secondary2 py-5 px-5 mt-5 sm:px-6">
        <Box justify="center" className="max-w-6-5 flex-1" direction="row">
          <Box>
            <a
              href="http://www.lzs-zveza.si"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              <LzsWLogo />
            </a>
          </Box>
        </Box>
      </div>
      <div className="flex justify-center items-center py-2 bg-gray-100 px-4 sm:px-6 text-xs text-gray-600">
        Design Veronika Štampfl © 2020
      </div>
    </>
  );
}

export default AppFooter;
