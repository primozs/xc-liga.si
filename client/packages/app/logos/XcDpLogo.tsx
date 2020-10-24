import React from 'react';
import XcDpText from 'assets/xc-dp-text.svg';

type Props = React.DetailedHTMLProps<
  React.ImgHTMLAttributes<SVGElement>,
  SVGElement
>;

const XcDpTextLogo = ({ width = '100%', ...rest }: Props) => {
  // @ts-ignore
  return <XcDpText width={width} {...rest} />;
};

export default XcDpTextLogo;
