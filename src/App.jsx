import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header.jsx';
import Content from './components/Content/Content.jsx';
import Sidebar from './components/Sidebar/Sidebar.jsx';

class App extends React.Component {
  render() {
    return (
      <div className="app-wrapper">
        <BrowserRouter>
          <Header />
          <div className='main-row'>
            <Sidebar />
            <Content />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
