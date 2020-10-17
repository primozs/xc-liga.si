import React from 'react';
import { Routes } from 'react-static';
import { Switch, Route } from 'react-router-dom';
import ErrorBoundary from '../common/components/ErrorBoundary';
import Header from '../common/components/Header';
import Spinner from '../common/components/Spinner';
import './AppShell.css';

function AppShell() {
  return (
    <div>
      <Header title="XC-Liga" />
      <div>
        <ErrorBoundary>
          <React.Suspense
            fallback={
              <div>
                <Spinner />
              </div>
            }
          >
            <Switch>
              <Route render={() => <Routes />} />
            </Switch>
          </React.Suspense>
        </ErrorBoundary>
      </div>
    </div>
  );
}

export default AppShell;
