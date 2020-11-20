import React from 'react';
import lzs from 'assets/naviter.png';

type Props = React.DetailedHTMLProps<
  React.ImgHTMLAttributes<HTMLImageElement>,
  HTMLImageElement
>;

const NaviterLogo = (props: Props) => {
  return (
    <img
      src={lzs}
      alt="Naviter"
      // width="198"
      // height="87"
      {...props}
    />
  );
};

export default NaviterLogo;
