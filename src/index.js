import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import Store from './redux/Store.js';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

const renderApp = (store) => {
    root.render(
        <React.StrictMode>
            <App state={ store.getState() } dispatch={ store.dispatch } />
        </React.StrictMode>
    );
};
const store = new Store();
store.subscribe(renderApp);

renderApp(store);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
