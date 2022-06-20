import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { state, appHandlers, subscriber } from './redux/state.js';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

const renderApp = (state, appHandlers) => {
    root.render(
        <React.StrictMode>
            <App state={state} appHandlers={appHandlers} />
        </React.StrictMode>
    );
};

subscriber(renderApp);

renderApp(state, appHandlers);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
