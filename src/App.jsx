import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { authAPI } from './api/api';
import './App.css';
import Content from './components/Content/Content.jsx';
import Sidebar from './components/Sidebar/Sidebar.jsx';
import HeaderContainer from './components/Header/HeaderContainer.jsx';
import { authUser } from './redux/redusers/authReducer';

const App = (props) => {
  useEffect(() => {
    authAPI.login();
  }, []);

  return (
    <div className="app-wrapper">
      <HeaderContainer />
      <div className='main-row'>
        <nav
          className={props.burgerIsActive
            ? 'sidebar sidebar_active' : 'sidebar'}
        >
          <Sidebar />
        </nav>
        <main className="main">
          <Content />
        </main>
      </div>
    </div>
  );
};

App.propTypes = {
  burgerIsActive: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  burgerIsActive: state.header.burgerMenu.isActive,
});

export default connect(mapStateToProps, { authUser })(App);
