import React from 'react';
import NaviterSvg from 'assets/naviter.svg';

type Props = React.DetailedHTMLProps<
  React.ImgHTMLAttributes<SVGElement>,
  SVGElement
>;

const NaviterLogo = ({ width = '100%', ...rest }: Props) => {
  // @ts-ignore
  return <NaviterSvg width={width} {...rest} />;
};

export default NaviterLogo;
