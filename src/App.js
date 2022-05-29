import Sidebar from './components/Sidebar.jsx';
import Profile from './components/Profile.jsx';
import './App.css';

function App() {
  return (
    <div className="app-wrapper">
      <div className='content'>
        <div className='content__container'>
          <div className='content__sidebar'>
            <Sidebar />
          </div>
          <div className='content__profile'>
            <Profile />
          </div>
        </div>
      </div>
      <footer className='footer'>
        <div className='footer__container'>Footer</div>
      </footer>
    </div>
  );
}

export default App;
