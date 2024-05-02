import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider as ReduxProvider } from 'react-redux';
import store from './lib/store';
import App from './containers/App';
import './index.css';

const rootElement = document.getElementById('root')!;
const root = createRoot(rootElement);
root.render(
  <ReduxProvider store={store}>
    <App />
  </ReduxProvider>
);

