import React from 'react';
import XcDpNoText from 'assets/xc-dp-no-text.svg';

type Props = React.DetailedHTMLProps<
  React.ImgHTMLAttributes<SVGElement>,
  SVGElement
>;

const XcDpNoTextLogo = ({ width = '100%', ...rest }: Props) => {
  // @ts-ignore
  return <XcDpNoText width={width} {...rest} />;
};

export default XcDpNoTextLogo;
