import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { connect } from 'react-redux';
import { initializeApp } from './redux/redusers/appReducer';
import Content from './components/Content/Content.jsx';
import HeaderContainer from './components/Header/HeaderContainer.jsx';
import LoginContainer from './components/Login/LoginContainer.jsx';
import DashLoader from './components/Common/Preloaders/DashLoader/DashLoader.jsx';

const App = (props) => {
  useEffect(() => {
    props.initializeApp();
  }, []);

  return <div className="app-wrapper">
    <HeaderContainer />
    <div className='main-row'>
      {!props.appInitialized
        ? <div className='loader'><DashLoader /></div>
        : <>
          <Routes>
            <Route path='/login' element={<LoginContainer />} />
            <Route path='/*' element={<Content />} />
          </Routes>
        </>}
    </div>

  </div>;
};

App.propTypes = {
  appInitialized: PropTypes.bool.isRequired,
  initializeApp: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  appInitialized: state.app.appInitialized,
});

export default connect(mapStateToProps, { initializeApp })(App);
