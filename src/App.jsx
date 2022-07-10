import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import * as axios from 'axios';
import { Provider } from 'react-redux';
import './App.css';
import Content from './components/Content/Content.jsx';
import Sidebar from './components/Sidebar/Sidebar.jsx';
import HeaderContainer from './components/Header/HeaderContainer.jsx';

const App = (props) => {
  const { store } = props;
  const state = store.getState();
  // перерисовка сайдбара по нажатию бургера???

  const http = axios.create({
    baseURL: 'http://127.0.0.1:8000',
    headers: {
      'X-Requested-With': 'XMLHttpReques',
    },
    withCredentials: true,
  });

  async function logIn() {
    await http.get('/sanctum/csrf-cookie');
    // console.log('csrf = ', csrf);
    await http.post('/api/login', {
      email: 'stani@gmail.com',
      password: '0000',
    });
    /* console.log('login = ', login);
    const u = await http.post('api/auth/me');
    console.log('u = ', u);
    const o = await http.post('api/logout');
    console.log('o = ', o);
    const u1 = await http.post('api/auth/me');
    console.log('u1 = ', u1); */
  }

  useEffect(() => {
    logIn();
  }, []);

  return (
    <Provider store={store} >
      <div className="app-wrapper">
        <HeaderContainer />
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
