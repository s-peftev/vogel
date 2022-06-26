import './App.css';
import Header from './components/Header/Header.jsx';
import Content from './components/Content/Content.jsx';
import Sidebar from './components/Sidebar/Sidebar.jsx';

const App = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <div className='main-row'>
        <nav
          className={/*state.header.burger_menu.isActive ? 'sidebar sidebar_active' :*/ 'sidebar'}
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

export default App;
