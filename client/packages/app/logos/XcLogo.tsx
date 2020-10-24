import React from 'react';
import Xc from 'assets/xc.svg';

type Props = React.DetailedHTMLProps<
  React.ImgHTMLAttributes<SVGElement>,
  SVGElement
>;

const XcLogo = ({ width = '100%', ...rest }: Props) => {
  // @ts-ignore
  return <Xc width={width} {...rest} />;
};

export default XcLogo;
