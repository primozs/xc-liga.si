import React from 'react';
import Link from 'next/link';

type LinkProps = {
  children: React.ReactNode;
} & PropsType<typeof Link>;

const AnchorLink = ({ children, ...rest }: LinkProps) => {
  // const history = useHistory();
  // const handleClick = useCallback(
  //   (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
  //     e.preventDefault();
  //     href && history.push(href);
  //   },
  //   [href, history]
  // );
  // onClick={handleClick}

  return (
    <Link {...rest}>
      <a>{children}</a>
    </Link>
  );
};

export default AnchorLink;
