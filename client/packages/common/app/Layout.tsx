import React from 'react';
import ErrorBoundary from './ErrorBoundary';
import HeadBase from './HeadBase';
import Header from './Header';
import Nav from './Nav';

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <ErrorBoundary>
      <div>
        <HeadBase />
        <Header title={'XC-Liga'} />
        <Nav />
        <main className="py-2">{children}</main>
      </div>
    </ErrorBoundary>
  );
}
