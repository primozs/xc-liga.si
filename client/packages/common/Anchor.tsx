import React from 'react';
import Link from 'next/link';
import cx from 'common/tailwindcss-classnames';

type LinkProps = PropsType<typeof Link>;

type AnchorProps = {
  children: React.ReactNode;
  className?: string;
  type?: 'normal' | 'primary' | 'outline' | 'secondary' | 'header';
  onClick?: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
  href?: LinkProps['href'];
} & Omit<LinkProps, 'href'>;

const Anchor = ({
  children,
  className = '',
  type = 'normal',
  onClick,
  href,
  ...rest
}: AnchorProps) => {
  const primary = cx(
    'bg-primary',
    'hover:bg-primary1',
    'text-white',
    'py-2',
    'px-4',
    'rounded-sm'
  );

  const outline = cx(
    'bg-transparent',
    'hover:bg-primary',
    'text-primary1',
    'hover:text-white',
    'py-2',
    'px-4',
    'border',
    'border-primary1',
    'hover:border-transparent',
    'rounded-sm'
  );

  const secondary = cx(
    'bg-gray-200',
    'hover:bg-gray-300',
    'text-gray-500',
    'py-2',
    'px-4',
    'rounded-sm'
  );

  const header = cx(
    'text-sm',
    'font-medium',
    'text-gray-700',
    'hover:text-secondary',
    'transition',
    'duration-150',
    'ease-in-out'
  );

  const classes = cx({
    [primary]: type === 'primary',
    [secondary]: type === 'secondary',
    [outline]: type === 'outline',
    [header]: type === 'header',
  });

  if (!href) {
    return (
      // eslint-disable-next-line jsx-a11y/anchor-is-valid
      <a onClick={onClick} className={`${classes} ${className}`}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} {...rest}>
      {/*  eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a className={`${classes} ${className}`}>{children}</a>
    </Link>
  );
};

export default Anchor;
