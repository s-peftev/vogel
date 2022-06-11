import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header.jsx';
import Content from './components/Content/Content.jsx';
import Sidebar from './components/Sidebar/Sidebar.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      burger: {
        active: false,
        handleClick: this.burgerHandleClick,
      },
    }
  }

  burgerHandleClick = () => {
    this.setState(
      {
        burger: {
          active: !this.state.burger.active,
          handleClick: this.burgerHandleClick,
        },
      }
    )
  }

  render() {
    return (
      <div className="app-wrapper">
        <BrowserRouter>
          <Header state={this.state} />
          <div className='main-row'>
            <nav className={this.state.burger.active ? 'sidebar sidebar_active' : 'sidebar'}>
              <Sidebar />
            </nav>
            <main className="main">
              <Content />
            </main>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
