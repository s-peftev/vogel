import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './App';
import './index.css';
import store from './redux/ReduxStore.js';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

const renderApp = (store) => {
    root.render(
        <React.StrictMode>
            <BrowserRouter>
                <Provider store={store} >
                    <App />
                </Provider>
            </BrowserRouter>
        </React.StrictMode>
    );
};

store.subscribe(() => {
    renderApp(store);
});

renderApp(store);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
