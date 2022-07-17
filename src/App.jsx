import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Content from './components/Content/Content.jsx';
import HeaderContainer from './components/Header/HeaderContainer.jsx';
import LoginContainer from './components/Login/LoginContainer.jsx';

const App = () => (
  <div className="app-wrapper">
    <HeaderContainer />
    <div className='main-row'>
      <Routes>
        <Route path='/login' element={<LoginContainer />} />
        <Route path='/*' element={<Content />} />
      </Routes>
    </div>
  </div>
);

export default App;
