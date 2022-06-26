import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header.jsx';
import Content from './components/Content/Content.jsx';
import Sidebar from './components/Sidebar/Sidebar.jsx';

const App = (props) => {
  const { store } = props;
  const state = store.getState();

  return (
    <div className="app-wrapper">
      <BrowserRouter>
        <Header store={store} />
        <div className='main-row'>
          <nav
            className={state.header.burger_menu.isActive ? 'sidebar sidebar_active' : 'sidebar'}
          >
            <Sidebar store={store} />
          </nav>
          <main className="main">
            <Content store={store} />
          </main>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
