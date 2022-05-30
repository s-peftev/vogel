import React from 'react';
import Content from './components/Content/Content.jsx';
import Footer from './components/Footer/Footer.jsx';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="app-wrapper">
        <Content />
        <Footer />
      </div>
    );
  }
}

export default App;
