import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from './App';

// Export (for static rendering)
export default App;

if (typeof document !== 'undefined') {
  const target = document.getElementById('root')!;

  const renderMethod = target.hasChildNodes()
    ? ReactDOM.hydrate
    : ReactDOM.render;

  const render = (Comp: Function) => {
    renderMethod(
      <AppContainer>
        <StrictMode>
          <Comp />
        </StrictMode>
      </AppContainer>,
      target
    );
  };

  render(App);

  if (module && module.hot) {
    module.hot.accept('./App', () => {
      render(App);
    });
  }
}
