import React from 'react';
import HaSvg from 'assets/ha.svg';

type Props = React.DetailedHTMLProps<
  React.ImgHTMLAttributes<SVGElement>,
  SVGElement
>;

const style = { maxWidth: 130 };

const HaLogo = ({ width = '100%', ...rest }: Props) => {
  // @ts-ignore
  return <HaSvg width={width} style={style} {...rest} />;
};

export default HaLogo;
