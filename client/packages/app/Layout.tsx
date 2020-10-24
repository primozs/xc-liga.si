import React from 'react';
import AppHeader from 'app/header/AppHeader';
import AppFooter from 'app/footer/AppFooter';
import styles from './Layout.module.css';

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <>
      <AppHeader />
      <main className={styles.main}>{children}</main>
      <AppFooter />
    </>
  );
}
