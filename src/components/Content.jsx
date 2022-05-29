import Sidebar from './Sidebar.jsx';
import Profile from './Profile.jsx';
import s from './Content.module.css';

function Content() {
    return (
      <div className={s.content}>
        <div className={s.container}>
          <div className={s.sidebar}>
            <Sidebar />
          </div>
          <div className={s.profile}>
            <Profile />
          </div>  
        </div>
      </div>
    );
  }
  
  export default Content;