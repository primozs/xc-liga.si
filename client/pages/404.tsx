import React from 'react';
import Box from 'common/Box';
import Anchor from 'common/Anchor';

const NotFound = () => {
  return (
    <div className="container mx-auto py-8 px-0 sm:px-4">
      <Box
        direction="column"
        className="px-6 py-8 justify-items-center items-center space-y-4"
      >
        <h3 className="text-4xl">Stran ne obstaja.</h3>

        <Box direction="row">
          <Anchor href="/" type="primary">
            Začetna stran
          </Anchor>
        </Box>
      </Box>
    </div>
  );
};

export default NotFound;
