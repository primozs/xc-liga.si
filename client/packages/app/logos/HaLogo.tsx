import React from 'react';
import HaSvg from 'assets/ha.svg';

type Props = React.DetailedHTMLProps<
  React.ImgHTMLAttributes<SVGElement>,
  SVGElement
>;

const HaLogo = ({ width = '100%', ...rest }: Props) => {
  // @ts-ignore
  return <HaSvg width={width} {...rest} />;
};

export default HaLogo;
