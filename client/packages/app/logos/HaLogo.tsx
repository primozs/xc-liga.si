import React from 'react';
import lzs from 'assets/ha.png';

type Props = React.DetailedHTMLProps<
  React.ImgHTMLAttributes<HTMLImageElement>,
  HTMLImageElement
>;

const HaLogo = (props: Props) => {
  return (
    <img
      src={lzs}
      alt="High Adventure"
      // width="198"
      // height="87"
      {...props}
    />
  );
};

export default HaLogo;
