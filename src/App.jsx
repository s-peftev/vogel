import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header.jsx';
import Content from './components/Content/Content.jsx';
import Sidebar from './components/Sidebar/Sidebar.jsx';

const App = (props) => {
  const { state, dispatch } = props;

  return (
    <div className="app-wrapper">
      <BrowserRouter>
        <Header state={state.header} dispatch={dispatch} />
        <div className='main-row'>
          <nav
            className={state.header.burger_menu.isActive ? 'sidebar sidebar_active' : 'sidebar'}
          >
            <Sidebar state={state.sidebar} dispatch={dispatch} />
          </nav>
          <main className="main">
            <Content state={state.content} dispatch={dispatch} />
          </main>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
