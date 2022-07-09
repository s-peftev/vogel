import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import * as axios from 'axios';
import { Provider } from 'react-redux';
import './App.css';
import Header from './components/Header/Header.jsx';
import Content from './components/Content/Content.jsx';
import Sidebar from './components/Sidebar/Sidebar.jsx';

const App = (props) => {
  const { store } = props;
  const state = store.getState();
  // перерисовка сайдбара по нажатию бургера???

  const http = axios.create({
    baseURL: 'https://git-talks-server.herokuapp.com',
    headers: {
      'X-Requested-With': 'XMLHttpReques',
      Accept: 'application/json',
    },
    withCredentials: true,
  });

  async function logIn() {
    const csrf = await http.get('/sanctum/csrf-cookie');
    console.log('csrf = ', csrf);
    const login = await http.post('/api/login', {
      email: 'stani@gmail.com',
      password: '0000',
    });
    console.log('login = ', login);
  }

  useEffect(() => {
    logIn();
  }, []);

  return (
    <Provider store={store} >
      <div className="app-wrapper">
        <Header />
        <div className='main-row'>
          <nav
            className={state.header.burger_menu.isActive ? 'sidebar sidebar_active' : 'sidebar'}
          >
            <Sidebar />
          </nav>
          <main className="main">
            <Content />
          </main>
        </div>
      </div>
    </Provider>
  );
};

App.propTypes = {
  store: PropTypes.object.isRequired,
};

export default App;
