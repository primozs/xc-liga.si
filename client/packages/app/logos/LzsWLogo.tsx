import React from 'react';
import lzs from 'assets/LzsW.png';

type Props = React.DetailedHTMLProps<
  React.ImgHTMLAttributes<HTMLImageElement>,
  HTMLImageElement
>;

const LzsWLogo = (props: Props) => {
  return (
    <img
      src={lzs}
      alt="Letalska Zveza Slovenije"
      width="198"
      height="87"
      {...props}
    />
  );
};

export default LzsWLogo;
