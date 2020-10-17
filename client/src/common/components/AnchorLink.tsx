import React from 'react';
import { Link } from 'react-router-dom';

type LinkProps = PropsType<typeof Link>;

const AnchorLink = ({ ...rest }: LinkProps) => {
  // const history = useHistory();
  // const handleClick = useCallback(
  //   (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
  //     e.preventDefault();
  //     href && history.push(href);
  //   },
  //   [href, history]
  // );
  // onClick={handleClick}

  return <Link {...rest} />;
};

export default AnchorLink;
