import React from 'react';
import Box from 'common/Box';

const Contact = () => {
  return (
    <Box className="text-xs text-white" pad="small" direction="column">
      <span>Letalska zveza Slovenije</span>
      <span>Tržaška 2</span>
      <span>1000 Ljubljana</span>
      <span>
        <a
          href="http://www.lzs-zveza.si"
          target="_blank"
          rel="noopener noreferrer nofollow"
        >
          www.lzs-zveza.si
        </a>
      </span>
    </Box>
  );
};

export default Contact;
