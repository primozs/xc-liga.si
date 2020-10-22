import React from 'react';
import AnchorLink from './AnchorLink';

type Props = {
  title: string;
};

const Header = ({ title }: Props) => {
  return (
    <header>
      <h3>{title}</h3>
      <AnchorLink href="/">Domov</AnchorLink>
      <AnchorLink href="/tekmovanje">Tekmovanje</AnchorLink>
    </header>
  );
};

export default Header;
