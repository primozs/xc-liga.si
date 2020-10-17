import React from 'react';
import AnchorLink from './AnchorLink';

type Props = {
  title: string;
};

const Header = ({ title }: Props) => {
  return (
    <header>
      <h3>{title}</h3>
      <AnchorLink to="/">Domov</AnchorLink>
      <AnchorLink to="/miting">XC miting</AnchorLink>
      <AnchorLink to="/tekmovanje">Tekmovanje</AnchorLink>
      <AnchorLink to="/todos">Todos</AnchorLink>
    </header>
  );
};

export default Header;
