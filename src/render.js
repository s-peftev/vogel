import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const renderApp = (state, appHandlers) => {
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <React.StrictMode>
      <App state={state} appHandlers={appHandlers} />
    </React.StrictMode>
  )
};

export default renderApp;