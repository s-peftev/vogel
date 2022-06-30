import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import './App.css';
import Header from './components/Header/Header.jsx';
import Content from './components/Content/Content.jsx';
import Sidebar from './components/Sidebar/Sidebar.jsx';

const App = (props) => {
  const { store } = props;
  const state = store.getState();
  // перерисовка сайдбара по нажатию бургера???
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
