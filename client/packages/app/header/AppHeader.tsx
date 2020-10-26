import React from 'react';
import Anchor from 'common/Anchor';
import XCDpNoTextLogo from 'app/logos/XcDpNoTextLogo';
import Box from 'common/Box';
import cx from 'common/tailwindcss-classnames';
import styles from './AppHeader.module.css';

function AppHeader() {
  const cls = cx(
    'fixed',
    'top-0',
    'w-full',
    'flex',
    'justify-center',
    'items-center',
    'border-b-2',
    'border-gray-100',
    'py-0',
    'bg-white',
    'px-4',
    'sm:px-6',
    'z-20'
  );
  const classes = `${cls} ${styles.header}`;
  return (
    <header className={classes}>
      <nav className="flex-1 flex max-w-6-5xl justify-between items-center">
        <Box className="p-2">
          <Anchor href="/" anchorProps={{ title: 'XC - Liga' }}>
            <XCDpNoTextLogo className={styles.logo} />
          </Anchor>
        </Box>
        <div className="flex space-x-5">
          <Anchor href="/" type="header" className="uppercase">
            Lestvica
          </Anchor>
          <Anchor href="/pravila" type="header" className="uppercase">
            Pravila
          </Anchor>
        </div>
      </nav>
    </header>
  );
}

export default AppHeader;
